import { Col, Container, Row } from "react-bootstrap";
import CardNFT from "./card-nft";
import Slider from "react-slick";

const RareItem = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "10px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          autoplay: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px"
        }
      }
    ]
  };

  return (
    <Container>
      <h1 className="fs-1">LE Super Rare Auction</h1>
      <p>
        We have released four limited edition NFTs early which can be bid on via
        OpenSea.
      </p>
      <Slider {...settings}>
        <div>
          <CardNFT
            imgSrc="Purple-Man.png"
            color={{
              series: "text-white",
              top: "text-dark-99",
              nftName: "text-dark",
              nftPrice: "text-dark",
              level: "text-dark-99",
              day: "text-dark-99",
            }}
            logo="ETH.png"
            bg="bg-info"
            name="Purple Man"
            price={1}
            leader="3"
            bid={false}
            currency="ETH"
            lastupdate="1 day ago"
          />
        </div>
        <div>
          <CardNFT
            imgSrc="Beige.png"
            color={{
              series: "text-orange",
              top: "text-light",
              nftName: "text-white",
              nftPrice: "text-white",
              level: "text-white",
              day: "text-white",
            }}
            bg="bg-success"
            name="Beige"
            price={1}
            leader="4"
            bid={false}
            currency="NEAR"
            lastupdate="1 day ago"
          />
        </div>
        <div>
          <CardNFT
            imgSrc="Red-Man.png"
            color={{
              series: "text-info",
              top: "text-white",
              nftName: "text-white",
              nftPrice: "text-white",
              level: "text-white",
              day: "text-white",
            }}
            bg="bg-danger"
            name="Red Man"
            price={1}
            leader="1"
            bid={true}
            currency="BTC"
            lastupdate="1 day ago"
          />
        </div>
        <div>
          <CardNFT
            imgSrc="Green.png"
            color={{
              series: "text-orange",
              top: "text-white",
              nftName: "text-dark",
              nftPrice: "text-dark",
              level: "text-dark-99",
              day: "text-dark-99",
            }}
            //   logo="ETH.png"
            bg="bg-warning"
            name="Green Girl"
            price={1}
            leader="2"
            bid={true}
            currency="ADA"
            lastupdate="1 day ago"
          />
        </div>
      </Slider>
    </Container>
  );
};

export default RareItem;
