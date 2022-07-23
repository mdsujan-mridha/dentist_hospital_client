import React from 'react';

const InfoCard = ({card}) => {
    const {img,title,content,background} = card
    return (
        <div class={`card card-side  shadow-xl ${background}`}>
        <figure>
            <img src={img} alt="Movie" />

            </figure>
        <div class="card-body">
          <h2 class="card-title text-white">{title}</h2>
          <p className='text-white'>{content}</p>
        </div>
      </div>
    );
};

export default InfoCard;