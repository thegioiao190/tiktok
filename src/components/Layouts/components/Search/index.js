import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import Headless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        const fetchAPI = async () => {
            const data = await searchServices.search(debounce);
            setSearchResult(data);
            setShowLoading(false);
        };
        fetchAPI();
    }, [debounce]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const onInputChange = (e) => {
        const text = e.target.value;
        if (text[0] != ' ') {
            setSearchValue(text);
        }
    };
    return (
        <Headless
            visible={showResult && searchResult.length > 0}
            interactive={true}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>accounts</h4>
                        {searchResult.map((item) => {
                            return (
                                <AccountItem
                                    key={item.id}
                                    name={item.full_name}
                                    avatar={item.avatar}
                                    user={item.nickname}
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={onInputChange}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !showLoading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </Headless>
    );
}
export default Search;
