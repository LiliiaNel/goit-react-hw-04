import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

export default function ImageModal({ isOpen, onRequestClose, image }) {
    // if (!isOpen || !image) return null;
    return (<ReactModal isOpen={isOpen}
        onRequestClose={onRequestClose}
        closeTimeoutMS={1}
        overlayClassName={"ReactModal__Overlay"}
        className={"ReactModal__Content"}
        shouldCloseOnEsc={true}>
        <div className={css.container}>
            <button onClick={onRequestClose}>Close</button>
            {image && <img src={image.urls.regular} alt={image.description} />}
        </div>
    </ReactModal>);
};
