import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faA,
    faQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu } from '~/components/Popper';
import Image from '~/components/Image';
import Badge from '~/components/Badge';
import Search from '../Search';
import Icons from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faA} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    const onHandleMenuClick = (item) => {
        console.log(item);
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@Hoaii',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Gei coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt={images.logo} />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button simple leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Tin Nhan" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Icons.MessageIcon />

                                    <Badge>4</Badge>
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Hop Thu" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Icons.InboxIcon />
                                    <Badge>15</Badge>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button to="/" primary>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu
                        hideOnClick={false}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onHandleMenuClick={onHandleMenuClick}
                    >
                        {currentUser ? (
                            <Image src="https://picsum.photos/200" alt="Nguyen Van A" className={cx('user-avatar')} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
