import { FaStar } from 'react-icons/fa';

function Star(props) {
  return (
    <div className='star'>
      <FaStar 
        onClick={props.onSelect} 
        className={props.select ? 'fa-star gold' : 'fa-star white'} 
      />
    </div>
  );
}

export default Star;