import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Input({ query, setQuery }) {
  const input = useRef();

  // const inputSearch = (e) => {
  //   e.key === 'Enter' && input.current.value
  //     ? setQuery(input.current.value)
  //     : setQuery(query);
  // };

  const inputSearch = (e) => setQuery(input.current.value);

  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <header className='header'>
      <div className='search'>
        <input
          ref={input}
          // onKeyDown={inputSearch}
          onChange={inputSearch}
          type='text'
          placeholder='Search...'
          // value={query}
        />

        <button onClick={inputSearch} className='fa fa-search'></button>
      </div>
      
      <button className='theme' onClick={() => toggleTheme()}>
        Mode{' '}
        {theme ? <i className='fa fa-moon' /> : <i className='fa fa-sun' />}
      </button>
    </header>
  );
}
