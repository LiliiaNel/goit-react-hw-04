import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onPaginate}) {
    return <>
    <button className={css.loadMoreBtn} onClick={onPaginate}>Load more</button>
    </>
};