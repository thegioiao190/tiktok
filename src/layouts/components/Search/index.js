import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import Headless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';
import SearchResult from './SearchResult';
import Icons from '~/components/Icons';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setShowLoading(true);
        const fetchAPI = async () => {
            const data = await searchServices.search(debounceValue);
            setSearchResult(data);
            setShowLoading(false);
        };
        fetchAPI();
    }, [debounceValue]);
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
        if (text[0] !== ' ') {
            setSearchValue(text);
        }
    };

    const renderResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>accounts</h4>
                <SearchResult searchResult={searchResult} />
            </PopperWrapper>
        </div>
    );
    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Headless
                visible={showResult && searchResult.length > 0}
                interactive={true}
                onClickOutside={handleHideResult}
                render={renderResult}
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
                        <Icons.SearchIcon />
                    </button>
                </div>
            </Headless>
        </div>
    );
}
export default Search;
