import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const className = cx('menu-item', { separate: data.separate });
    return (
        <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.object.isRequired,
};
export default MenuItem;
