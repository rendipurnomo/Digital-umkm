import '../styles/Notfound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__content'>
        <h1>OOPS!</h1>
        <h2>404 - The Page can't be found</h2>
      </div>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default NotFound;
