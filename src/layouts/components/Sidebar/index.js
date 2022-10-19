import styles from './Sidebar.module.scss';
import className from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import Icons from '~/components/Icons';

import config from '~/config';
import * as userService from '~/services/userService';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { useEffect, useState } from 'react';

const cx = className.bind(styles);

function Sidebar() {
    const INIT_PAGE = 1;
    const PER_PAGE = 5;
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page: page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [page]);

    const handleSeeMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<Icons.HomeIcon />}
                    iconActive={<Icons.HomeIconActive />}
                    to={config.routes.home}
                />
                <MenuItem
                    title="Following"
                    icon={<Icons.UsersIcon />}
                    iconActive={<Icons.UsersIconActive />}
                    to={config.routes.following}
                />
                <MenuItem
                    title="Live"
                    icon={<Icons.LiveIcon />}
                    iconActive={<Icons.LiveIconActive />}
                    to={config.routes.live}
                />
            </Menu>
            <SuggestedAccounts onSeeMore={handleSeeMore} data={suggestedUser} title="SuggestedAccount" />
        </aside>
    );
}

export default Sidebar;
