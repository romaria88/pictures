import React from 'react';

export default function LightBox({
  displayImage,
  light,
  dispImage,
  closeLightBox,
  imagesLenght,
}) {
  return (
    <section className='lightBox'>
      <i className='fa fa-remove' onClick={closeLightBox}></i>
      <img src={dispImage.imageUrl} alt={dispImage.imageUrl} />
      <div
        className='carousel fa fa-arrow-left'
        onClick={() => {
          let decrement = light - 1;
          if (decrement < 0) {
            decrement = imagesLenght - 1;
          }
          displayImage(decrement);
        }}
      ></div>

      <div
        className='carousel fa fa-arrow-right'
        onClick={() => {
          let increment = light + 1;
          if (increment > imagesLenght - 1) {
            increment = 0;
          }
          displayImage(increment);
        }}
      ></div>
    </section>
  );
}
