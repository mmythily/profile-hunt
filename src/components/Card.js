import React from 'react';

const Card = (props) => {
  const {name, email, id} = props;

  return (
    <div className='grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='profile' src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;