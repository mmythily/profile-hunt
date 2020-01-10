import React from 'react';
import Card from './Card';

const CardList = ({profiles}) => {
  return (
    <div>
      {profiles.map((user,i)=> {
        return (
          <Card 
            key={i}
            id={profiles[i].id} 
            name={profiles[i].name} 
            email={profiles[i].email} 
          />
        );
      })
      }
    </div>
  );
}
export default CardList;