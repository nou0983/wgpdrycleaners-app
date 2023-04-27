import logoWhite from "../../assets/imgs/logo-white1.png";
import Wrapper from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="image-container">
          <img src={logoWhite} alt="WGP Drycleaners" />
        </div>
        <div className="flex-container">
          <div className="info-container">
            <h3>contact</h3>
            <p>Whangaparaoa Drycleaners</p>
            <p>4 / 689 Whangaparaoa Rd, Stanmore Bay, Auckland</p>
            <p>info@wgpdrycleaners.co.nz</p>
            <p>(09) 424 1989</p>
            <h3>trading hours</h3>
            <p>
              Mon - Fri 7am to 5.30pm, Sat 8am to 1pm, Sun & Public Holidays
              Closed
            </p>
          </div>
          <div className="info-container">
            <p>
              Copyright &copy; 2019 by Whangaparaoa Drycleaners. All Rights
              Reserved. Developed by Minsu Jung. Design Credit to Jonas
              Schmedtmann.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
