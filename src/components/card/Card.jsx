import classes from './Card.module.scss';
import React from 'react';

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes['card__info']}>
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className={classes['card__stats']}>
          <div>
            <span className={classes['card__stats-number']}>10k+</span>
            <span className={classes['card__stats-heading']}>companies</span>
          </div>
          <div>
            <span className={classes['card__stats-number']}>314</span>
            <span className={classes['card__stats-heading']}>templates</span>
          </div>
          <div>
            <span className={classes['card__stats-number']}>12m+</span>
            <span className={classes['card__stats-heading']}>queries</span>
          </div>
        </div>
      </div>
      <div className={classes['card__img']}>
        <img
          src={require('../../assets/image-header-desktop.jpg')}
          alt='Meeting'
        />
      </div>
    </div>
  );
};

export default Card;
