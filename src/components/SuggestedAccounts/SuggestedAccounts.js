import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

import style from './SuggestedAccounts.module.scss';

const cx = classNames.bind(style);

function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('discover-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propsTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
