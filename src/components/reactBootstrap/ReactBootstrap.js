// css
import './ReactBootstrap.css';
// image
import headerImage from "../../images/headerImage.png"

export default function ActionAreaCard() {
  return (
    <div className="row container">
      <div className="col-lg-6 col-sm-12 ">
        <h1>
          Search for Homes in your Neighborhood
        </h1>
        <p>
          Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.
        </p>
        <div className="row">
          <div className="col-lg-12 fluid-container">
            <h3>
              Address
            </h3>
            <address className="">
              587 Bridgeton Road
            </address>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
      <div id="headImg" className="col-lg-6 col-sm-12 align-middle">
        <img src={headerImage} alt="Header Image"/>
      </div>

    </div>

  );
}
