import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Les tendances du marché Digital et Editique </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic necessitatibus praesentium corrupti neque quae deserunt'
              label='DIGITAL'
              path='/'
            />
            <CardItem
              src='images/img-2.webp'
              text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic necessitatibus praesentium corrupti neque quae deserunt'
              label='DIGITAL'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic necessitatibus praesentium corrupti neque quae deserunt'
              label='DIGITAL'
              path='/'
            />
            <CardItem
              src='images/img-4.png'
              text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic necessitatibus praesentium corrupti neque quae deserunt'
              label='DIGITAL'
              path='/products'
            />
            <CardItem
              src='images/img-5.webp'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='DIGITAL'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards ;