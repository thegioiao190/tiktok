import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Header({ onClickBack, title }) {
    return (
        <div className={cx('header')}>
            <button className={cx('header-back-btn')} onClick={onClickBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}
export default Header;
