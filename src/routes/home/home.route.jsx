import logo from '../../assets/imgs/logo-white.png';
import { HeroBox } from '../../components/index.component';
import Wrapper from './home.styles';

const Home = () => {
  return (
    <Wrapper>
      <a href="index.html">
        <img src={logo} alt="WGP Drycleaners" />
      </a>
      <HeroBox />
    </Wrapper>
  );
}

export default Home