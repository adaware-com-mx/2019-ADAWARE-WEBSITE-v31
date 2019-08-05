import styled, { keyframes } from 'styled-components';
import { themeGet } from 'styled-system';

const Bubble = keyframes`
  0% {
		box-shadow: 0 0 0 3px rgba(255,65,108,0.3);
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		box-shadow: 0 0 0 100px rgba(255,65,108,0);
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
`;

export const BannerWrapper = styled.section`
  padding: 150px 0 50px 0;
  background-color: ${themeGet('colors.crm')};
  background-image: linear-gradient(
    0grad, 
    rgba(0, 0, 0, 0) 70%, 
    rgba(0, 0, 0, 0.2) 90%
  ),
  linear-gradient(
    125grad, 
    rgba(255,255,255,0.0) 0%,
    rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0) 20.1%
  );
  background-size: cover;
  background-position: top center;
  overflow: hidden;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: 'Nanum Gothic', 'Open Sans', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(0, 0, 0, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;

export const VideoModal = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${themeGet('colors.black')};
    opacity: 0.1;
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4553;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    svg {
      width: 30px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  &:focus {
    &:after {
      animation: ${Bubble} 0.5s ease-out forwards;
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: calc(100% - 30px);
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

