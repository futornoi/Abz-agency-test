import './Preloader.scss';

const preloaderSrc = './images/Preloader.svg';

const Preloader = () => (
  <div className="preloader-wrapper">
    <img src={preloaderSrc} alt="Loading..."/>
  </div>
);

export default Preloader;
