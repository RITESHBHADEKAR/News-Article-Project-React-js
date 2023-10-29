import React, { useState } from 'react';
import { useEffect } from 'react';

export const SingleNews = ({
  id,
  Date,
  Location,
  image,
  NewsText,
  NewsTitle,
  ReporterName,
}) => {
  const [readText, setReadText] = useState(false);
  const [text, setText] = useState(true);

  return (
    <>
      <article className='single-news  ' key={id}>
        <img src={image} alt={NewsTitle} className='img' />
        <h1 className='single-news-title'>{NewsTitle}</h1>
        <p className='news-text'>
          {text ? NewsText.slice(0, 100) : NewsText}
          <p
            className='read-more'
            onClick={() => {
              setReadText(!readText);
              setText(!text);
            }}
          >
            {readText ? 'show less' : 'read more'}
          </p>
        </p>
        <h6 className='location'>{Location}</h6>
        <div className='reporter-info'>
          <img src={image} className='img reporter-img' alt='icon' />
          <p className='reporter-name'>{ReporterName}</p>
          <p>{Date}</p>
        </div>
      </article>
    </>
  );
};
