import { BeatLoader} from "react-spinners";
import css from './Loader.module.css'; 

export default function Loader() {
    return <div className={css.container}>
        <BeatLoader
            color={'#4c4fdc'}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>;
};