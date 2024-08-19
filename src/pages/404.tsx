import { Link } from 'react-router-dom';
import '../404.css';

const _404 = () => {
  return (
    <div className='_404-container'>
      <div title="404">404</div>
      <Link to='/' className='text-5xl hover:underline'>Back to home page</Link>
    </div>
  );
};

export default _404;
