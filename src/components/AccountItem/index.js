import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '../Image';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem({ name, user, avatar }) {
    return (
        <Link className={cx('wrapper')} to={`/@${user}`}>
            <Image className={cx('avatar')} src={avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{user}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default AccountItem;
