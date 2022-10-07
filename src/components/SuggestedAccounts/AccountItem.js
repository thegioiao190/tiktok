import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';

import style from './SuggestedAccounts.module.scss';

const cx = classNames.bind(style);

function AccountItem({ title }) {
    return (
        <div className={cx('account-item')}>
            <Image className={cx('avatar')} src="https://via.placeholder.com/150" alt="" />
            <div className={cx('info')}>
                <p className={cx('username')}>
                    nguynvana
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>nguyen van a</p>
            </div>
        </div>
    );
}

AccountItem.propsTypes = {
    title: PropTypes.string.isRequired,
};

export default AccountItem;
