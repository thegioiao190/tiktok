import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';

import style from './SuggestedAccounts.module.scss';
import SuggestedPopper from './SuggestedPopper';

const cx = classNames.bind(style);

const data = {
    avatar: 'https://via.placeholder.com/150',
    username: 'nguyenvana',
    name: 'Nguyen Van A',
    icon: <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />,
    followerValue: '7.4M',
    likeValue: '411.2M',
};
function AccountItem({}) {
    return (
        <SuggestedPopper {...data}>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src={data.avatar} alt="" />
                <div className={cx('info')}>
                    <p className={cx('username')}>
                        {data.username}
                        {data.icon}
                    </p>
                    <p className={cx('name')}>{data.name}</p>
                </div>
            </div>
        </SuggestedPopper>
    );
}

AccountItem.propsTypes = {};

export default AccountItem;
