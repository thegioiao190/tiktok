import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

import style from './SuggestedAccounts.module.scss';

const cx = classNames.bind(style);

function SuggestedAccounts({ onSeeMore, data = [], title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            {data.map((account) => (
                <AccountItem key={account.id} account={account} />
            ))}
            <p className={cx('discover-btn')} onClick={onSeeMore}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propsTypes = {
    data: PropTypes.array,
    title: PropTypes.string.isRequired,
    onSeeMore: PropTypes.func,
};

export default SuggestedAccounts;
