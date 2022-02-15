import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={5}>
            <div className="footer-logo">
              <img src="logo.svg" alt="NFT Landing" className="img-fluid"></img>
              <p className="fs-6 text-dark-99">Exclusive NFT Collection</p>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="d-flex justify-content-around">
              <div className="about-us">
                <h6 className="text-uppercase fw-bold fs-6">About</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">About</li>
                  <li className="nav-item">Term</li>
                  <li className="nav-item">Legal</li>
                </ul>
              </div>
              <div className="nft">
                <h6 className="text-uppercase fw-bold fs-6">NFT</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">OpenSea</li>
                  <li className="nav-item">Marker</li>
                  <li className="nav-item">Learn</li>
                </ul>
              </div>

              <div className="contact">
                <h6 className="text-uppercase fw-bold fs-6">Contact</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">Press</li>
                  <li className="nav-item">Support</li>
                </ul>
              </div>

              <div className="social-media">
                <h6 className="text-uppercase fw-bold fs-6">social</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">Twitter</li>
                  <li className="nav-item">Instagram</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <div className="copy-right">
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-dark-99">
                &copy; copyright {new Date().getUTCFullYear()} NFT Landing
              </p>
            </div>
            <div>
              <p className="text-dark-99">
                Launching August {new Date().getUTCFullYear()}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Footer;
