import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}></aside>;
}
export default Sidebar;
