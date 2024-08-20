import { PacmanLoader } from 'react-spinners';

const Preloader = () => {
  return (
    <div className="border-2 h-screen flex justify-center items-center">
      <PacmanLoader size={100} color={'#000'} loading={true} />
    </div>
  );
};

export default Preloader;
