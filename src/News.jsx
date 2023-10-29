import React, { useState,useEffect } from 'react';
import { newsList } from './data';
import { SingleNews } from './SingleNews';

const News = () => {
  const [news, setNews] = useState(newsList);
  return (
    <div className='section-center'>
      <h3> Recent News</h3>
      <div className='news-container'>
        {news.map((NewsItem) => {
          return <SingleNews key={NewsItem.id} {...NewsItem} />
          ;
        })}
      </div>
        </div>
  );
};

export default News;
