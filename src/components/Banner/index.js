import bannerImage from '../../imagens/banner.png';
import './Banner.css'
function Banner() {
  return (
    <header className='banner'>
        <img src={bannerImage} alt="texto" />
    </header>
  );
}

export default Banner;
