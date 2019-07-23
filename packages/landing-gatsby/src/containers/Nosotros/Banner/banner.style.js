import styled from 'styled-components';
import BannerBG from 'common/src/assets/image/saasModern/banner-texture.png';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #043675;
  background-image: url(${BannerBG}),
    linear-gradient(
      35deg, 
      rgb(3, 56, 117) 0%, 
      rgb(15, 100, 135) 100%);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: block;
      margin-top: -150px;
    }
  }
`;

export default BannerWrapper;
