import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '../Button';
import Image from '../Image';

import style from './SuggestedAccounts.module.scss';

const cx = classNames.bind(style);

function SuggestedPopper({ avatar, username, name, icon, followerValue, likeValue, children }) {
    const renderPopper = () => {
        return (
            <div className={cx('popper-wrapper')}>
                <div className={cx('popper-header')}>
                    <Image className={cx('avatar')} src={avatar} alt="" />
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
                <div className={cx('popper-info')}>
                    <p className={cx('username')}>
                        {username}
                        {icon}
                    </p>
                    <p className={cx('name')}>{name}</p>
                </div>
                <div className={cx('popper-analytics')}>
                    <p className={cx('followers-value')}>{followerValue}</p>
                    <p className={cx('label')}>Followers</p>
                    <p className={cx('like-value')}>{likeValue}</p>
                    <p className={cx('label')}>Likes</p>
                </div>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-8, 0]} delay={[800, 50]} placement="bottom-start" render={renderPopper}>
                {children}
            </Tippy>
        </div>
    );
}

SuggestedPopper.propTypes = {
    children: PropTypes.object.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    followerValue: PropTypes.number.isRequired,
    likeValue: PropTypes.number.isRequired,
};

export default SuggestedPopper;
