import { createContext, useEffect, useState } from 'react';

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const API_KEY = '18502932-6c0b76e41e5af9e2b090ba269';

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('apple');
  const [dispImage, setDispImage] = useState({ imageUrl: '' });
  const [showLight, setshowLight] = useState(false);
  const [light, setLight] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const { hits } = data;
        setImages(hits);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [query]);

  const displayImage = (index) => {
    const image = images[index];
    setDispImage({ imageUrl: image.webformatURL });
    setLight(index);
    setshowLight(true);
  };

  const closeLightBox = () => setshowLight(false);

  return (
    <PhotoContext.Provider
      value={{
        images,
        loading,
        query,
        setQuery,
        displayImage,
        setLight,
        showLight,
        dispImage,
        light,
        closeLightBox,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
