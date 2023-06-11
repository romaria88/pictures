import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import { ThemeContext } from '../context/ThemeContext';
import Card from './Card';
import Input from './Input';
import LightBox from './LightBox';

const Gallery = () => {
  const {
    query,
    setQuery,
    loading,
    images,
    displayImage,
    setLight,
    showLight,
    dispImage,
    light,
    closeLightBox,
  } = useContext(PhotoContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? 'dark' : 'light'}>
      <Input query={query} setQuery={setQuery} />
      <section className='container'>
        {loading === true ? (
          <div className='loading'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          images.map((image, index) => (
            <Card
              key={index}
              index={index}
              displayImage={displayImage}
              setLight={setLight}
              user={image.user}
              likes={image.likes}
              views={image.views}
              tags={image.tags}
              download={image.pageURL}
              imageUrl={image.webformatURL}
            />
          ))
        )}
      </section>
      {showLight === true ? (
        <LightBox
          displayImage={displayImage}
          light={light}
          dispImage={dispImage}
          closeLightBox={closeLightBox}
          imagesLenght={images.length}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Gallery;
// "id": 195893,
// "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
// "type": "photo",
// "tags": "blossom, bloom, flower",
// "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
// "previewWidth": 150,
// "previewHeight": 84,
// "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
// "webformatWidth": 640,
// "webformatHeight": 360,
// "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
// "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
// "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
// "imageWidth": 4000,
// "imageHeight": 2250,
// "imageSize": 4731420,
// "views": 7671,
// "downloads": 6439,
// "likes": 5,
// "comments": 2,
// "user_id": 48777,
// "user": "Josch13",
// "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
