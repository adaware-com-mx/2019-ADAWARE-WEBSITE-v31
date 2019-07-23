import styled from 'styled-components';

const InfoSectionWrapper = styled.section`
  padding: 220px 0 220px 0;
  @media (max-width: 1600px) {
    padding: 180px 0 100px 0;
  }
  @media (max-width: 1400px) {
    padding: 150px 0 100px 0;
  }
  @media (max-width: 1300px) {
    padding: 100px 0 100px 0;
  }
  @media (max-width: 1199px) {
    padding: 100px 0 100px 0;
  }
  @media (max-width: 767px) {
    padding: 30px 0 60px 0;
  }
  .info-sec-container {
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    @media (max-width: 768px) and (min-width: 768px) {
      top: 40%;
    }
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }
`;

export default InfoSectionWrapper;
