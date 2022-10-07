import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import Icons from '~/components/Icons';

import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function Sidebar() {
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
            <SuggestedAccounts title="SuggestedAccount" />
        </aside>
    );
}
export default Sidebar;
