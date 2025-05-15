import css from './ImageGallery.module.css';
import ImageCard from '../image-card/ImageCard';

export default function ImageGallery({items, onImageClick }) {
    return (<ul className={css.list}>
		{items.map((item) => (
			<li key={item.id}>
				<ImageCard image={item} onClick={() => onImageClick(item)} />
			</li>))}
		</ul>)

}