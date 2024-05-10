
import Star from './Star';
import { useState } from 'react';

function StarRating() {
  const [rate, setRate] = useState(0);

  const rateMessage = ['Poor', 'Weak', 'Good', 'Very Good', 'Excellent'];

  return (
    <section>
      <div className='stars flex'>
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            select={index < rate} 
            onSelect={() => setRate(index + 1)} 
          />
        ))}
      </div>
      <h2>{rate ? rateMessage[rate - 1]: 'Please select a rate'}</h2>
    </section>
  )
}

export default StarRating;