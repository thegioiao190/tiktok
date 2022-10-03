import classNames from 'classnames/bind';
import style from './Badge.module.scss';

const cx = classNames.bind(style);
function Badge({ children }) {
    return <sup className={cx('wrapper')}>{children}</sup>;
}
export default Badge;
