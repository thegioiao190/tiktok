import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function SearchResult({ searchResult }) {
    return searchResult.map((item) => {
        console.log('render');
        return <AccountItem key={item.id} name={item.full_name} avatar={item.avatar} user={item.nickname} />;
    });
}
export default memo(SearchResult);
// dung memo de trang re-render khi khong can thiet(khi click chuot ra ngoai tippy vaf khi click tro lai)
