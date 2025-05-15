import { useEffect, useState } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';
import ReactModal from 'react-modal';
import SearchBar from './components/search-bar/SearchBar';
import Loader from './components/loader/Loader';
import LoadMoreBtn from './components/load-more-btn/LoadMoreBtn';
import ImageGallery from './components/image-gallery/ImageGallery';
import ImageModal from './components/image-modal/ImageModal';
import ErrorMessage from './components/error-message/ErrorMessage';
import { fetchImages } from './gallery-api';
ReactModal.setAppElement('#root');

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    console.log("kjsdhfkjsh");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
    setImages([]);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        setIsError(false);
        setIsloading(true);
        const newImages = await fetchImages(query, currentPage);
      setImages((prevImages) => {
        return [...prevImages, ...newImages];
      });
     }
      catch { setIsError(true); } 
      finally {
      setIsloading(false);
    }
      
    }
    fetchData();
   }, [query, currentPage]);

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length >0 && <ImageGallery items={images} onImageClick={openModal} />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onPaginate={handleNextPage} />}
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage}/>
    </div>
  )
}

export default App
