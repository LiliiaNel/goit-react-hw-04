import css from './ImageCard.module.css';

export default function ImageCard({image, onClick}) {
    return <div className={css.cardBox} onClick={onClick}>
       {image && <img src={image.urls.regular} alt={image.description} />}
</div>
};