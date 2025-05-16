import { useState } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export default function SearchBar({ onSearch }) {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast("Type something and let's find it!",
        {
          icon: '🔍',
          style: {
            borderRadius: '10px',
            background: '#ffe3b3',
            color: '#2b2d42',
          },
        }
      );
      return;
    }

    onSearch(inputValue.trim());
    setInputValue('');
  };

  return (<header className={css.header}>
    <form className={css.form} onSubmit={handleSubmit}>
      <input id="searchInput"
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className={css.button} type="submit">Search</button>
    </form>
  </header>);
};