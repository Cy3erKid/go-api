import { Col, Container, Row } from "react-bootstrap";
import CardNFT from "./card-nft";

const EarlyNFT = () => {
  return (
    <>
      <Container className="mx-auto">
        <div className="early-nft mt-5">
          <Row>
            <Col xs={12} md={7}>
              <div className="ps-5">
                <div className="logo-nft pt-5">
                  <img src="/icon.png" className="img-fluid mb-3" />
                  <h3 className="fs-3">Free NFT for early birds</h3>
                  <p>Sign up today and you’ll get a free NFT when we launch.</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={5}>
              <div className="nft-early-card d-flex">
                <CardNFT
                  imgSrc="Purple-Man.png"
                  className="transform-left"
                  color={{
                    series: "text-orange",
                    top: "text-dark-99",
                    nftName: "text-dark",
                    nftPrice: "text-dark",
                    level: "text-dark-99",
                    day:  "text-dark-99"
                  }}
                  logo="ETH.png"
                  bg="bg-light"
                  name="Purple Man"
                  price={1}
                  leader="3"
                  bid={true}
                  currency="ETH"
                  lastupdate="1 day ago"
                />
                <CardNFT
                  imgSrc="girl.png"
                  color={{
                    series: "text-dark-99",
                    right: "text-dark-99",
                    nftName: "text-white",
                    nftPrice: "text-white",
                    level: "text-dark-99",
                    day:  "text-dark-99"
                  }}
                  bg="bg-dark"
                  name="Green Girl"
                  price={1}
                  currency="ADA"
                  leader="20"
                  bid={false}
                  className="transform-right"
                  lastupdate="2 day ago"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EarlyNFT;
