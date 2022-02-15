import { Col, Container, Row } from "react-bootstrap";
import SponsorLogo from "./sponsor-logo";

const Sponsor = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="sponsors d-flex justify-content-around">
          <div>
          <SponsorLogo logo="sponsor-1.svg"  alt="Sponsor 1" />
          </div>
          <div>
          <SponsorLogo logo="sponsor-2.svg" alt="Sponsor 2" />
          </div>
          <div>
          <SponsorLogo logo="sponsor-3.svg" alt="Sponsor 3"/>
          </div>
          <div>
          <SponsorLogo logo="sponsor-4.svg" alt="Sponsor 4" />
          </div>

        </div>
      </Container>
    </>
  );
};

export default Sponsor;
