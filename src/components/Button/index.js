import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    leftIcon,
    rightIcon,

    primary = false,
    rounded = false,
    outline = false,
    text = false,
    simple = false,

    small = false,
    large = false,

    disable,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const _props = {
        onClick: onClick,
        ...passProps,
    };

    //remove all even listion when disable
    if (disable) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        simple,
        text,

        small,
        large,

        disable,
        rounded,
        [className]: className,
    });

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{children}</span>

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,

    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    simple: PropTypes.bool,

    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
