import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

function Menu({ children, items, onHandleMenuClick = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onHandleMenuClick(item);
                        }
                    }}
                    key={index}
                    data={item}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {current.title && (
                            <Header
                                onClickBack={() => {
                                    setHistory([...history.splice(0, history.length - 1)]);
                                }}
                                title={current.title}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
