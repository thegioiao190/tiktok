import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '../Image';

import style from './SuggestedAccounts.module.scss';
import SuggestedPopper from './SuggestedPopper';

const cx = classNames.bind(style);

function AccountItem({ account }) {
    const data = {
        avatar: account.avatar,
        username: account.nickname,
        name: account.last_name + ' ' + account.first_name,
        icon: account.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />,
        followerValue: account.followers_count,
        likeValue: account.likes_count,
    };
    return (
        <SuggestedPopper {...data}>
            <div className={cx('account-item')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.name} />
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

AccountItem.propsTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
