import css from './ImageCard.module.css';

export default function ImageCard({image}) {
    return <div className={css.cardBox}>
        <img src={image.urls.small} alt={image.description} />
</div>

};