import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);

function DefualtLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefualtLayout;
