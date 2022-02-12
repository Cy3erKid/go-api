import { Button, Col, Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <div className="section-banner">
      <Container className="m-auto">
        <Row>
          <Col xs={10} md={8} className="ps-lg-5">
            <Col xs={12} md={9} className="ps-lg-5">
            <p className="fw-bold fs-6 text-pink text-uppercase">Launching Soon</p>
            <h2 className="fs-1 fw-bold text-black">An NFT like no other</h2>
            {/* <h2 className="fs-1 fw-bold text-black">no other</h2> */}
            <p className="text-wrap text-break text-black">Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live.</p>
            <Button variant="outline-secondary" className="text-dark fs-4 mt-4 fw-bold btn-signup">Sign Up</Button>
            </Col>
          </Col>
          <Col xs={2} md={4}>
            <div className="section-img">
            <picture>
              <img src="/graphic-2.svg" className="img-fluid img-thumbnail img-nft" alt="NFT Landing" />
            </picture>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
