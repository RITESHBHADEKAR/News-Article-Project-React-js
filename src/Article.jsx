import React, { useState } from 'react';

const Article = () => {
  const [text,setText] = useState(true)
  const [readmore,setReadmore] = useState(false)
  const texts =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos corporis eius nihil in enim? Ipsam nisi aut maiores explicabo voluptatum cum doloremque, reiciendis vitae atque fugiat harum exercitationem eos fugit labore tempora eveniet debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut similique vero voluptatum placeat tenetur sapiente fugit esse beatae, dignissimos inventore odio libero aspernatur ipsum..';
  return (
    <section className='section-center' style={{ paddingTop: '0.5rem' }}>
      <article className='news-article'>
        <div>
          <img
            className='img news-img'
            src='public\news-background.jpg'
            alt=''
          />
          <div className='news-info'>
            <h1 className='news-title'>
              Breaking News
            </h1>
            <p className='news-text'>{text ? texts.slice(0, 150) : texts}</p>
            <button
              className='btn'
              onClick={() => {
                setText(!text);
              }}
            >
              {!text ? 'see less' : 'read more '}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Article;
