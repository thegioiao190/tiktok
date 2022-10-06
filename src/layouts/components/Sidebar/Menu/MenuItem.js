import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ icon, iconActive, to, title }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-icon-active')}>{iconActive}</span>
            <span className={cx('menu-item-title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    icon: PropTypes.node,
    iconActive: PropTypes.node,
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
