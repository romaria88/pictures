import React from 'react';

export default function Card({
  download,
  imageUrl,
  views,
  likes,
  user,
  displayImage,
  index,
}) {
  return (
    <div className='card' onClick={() => displayImage(index)}>
      <img src={imageUrl} alt={imageUrl} />

      <h2>{user}</h2>

      <div className='raiting'>
        <div className='views'>
          <span className='fa fa-eye'></span>
          <span>{views}</span>
        </div>

        <div className='likes'>
          <span className='fa fa-heart'></span>
          <span>{likes}</span>
        </div>
      </div>

      <a className='download' href={download} target='_blank' rel='noreferrer'>
        Download
      </a>
    </div>
  );
}
