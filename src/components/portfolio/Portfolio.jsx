import React from 'react';
import './portfolio.css';
import CODING_EXPO from '../../assets/coding_expo.png';
import STOCK_METRICS from '../../assets/stock_metrics.png';
import IMAGERY from '../../assets/imagery.png';
import AWESOME_BOOKS from '../../assets/awesome_books.png';
import BOOKSTORE_CMS from '../../assets/bookstore_cms.png';
import LEADERBOARD from '../../assets/leaderboard.png';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: CODING_EXPO,
      title: 'Coding Expo',
      github: 'https://github.com/gak92/Module01_Capstone_Project',
      demo: 'https://gak92.github.io/Module01_Capstone_Project/'
    },
    {
      id: 2,
      image: AWESOME_BOOKS,
      title: 'Awesome Books',
      github: 'https://github.com/gak92/awesome_books_ES6',
      demo: 'https://gak92.github.io/awesome_books_ES6/'
    },
    {
      id: 3,
      image: STOCK_METRICS,
      title: 'Metrics webapp',
      github: 'https://github.com/gak92/metrics-wepapp/',
      demo: 'https://stock-metrics-webapp.netlify.app/'
    },
    {
      id: 4,
      image: LEADERBOARD,
      title: 'Leaderboard App',
      github: 'https://github.com/gak92/Leaderboard',
      demo: 'https://ghaz-leaderboard.netlify.app/'
    },
    {
      id: 5,
      image: BOOKSTORE_CMS,
      title: 'Book Store App',
      github: 'https://github.com/gak92/bookstore',
      demo: 'https://ghaz-bookstore.netlify.app/'
    },
    {
      id: 6,
      image: IMAGERY,
      title: 'Imagery',
      github: 'https://github.com/gak92/Capstone-Module-2',
      demo: 'https://berkay-akbas.github.io/Capstone-Module-2/'
    },
  
  ];
  
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
};

export default Portfolio;
