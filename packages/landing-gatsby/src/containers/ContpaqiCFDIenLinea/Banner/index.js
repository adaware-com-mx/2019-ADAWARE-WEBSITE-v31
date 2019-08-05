import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { openModal, closeModal } from '@redq/reuse-modal';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'gatsby-image';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper,
} from './banner.style';

import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import { play } from 'react-icons-kit/entypo/play';




const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  titles,
  description,
  imageWrapper,
  buttonWrapper,
  button,
}) => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(
        relativePath: { eq: "image/contpaqiCFDIenLinea/banner-image.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1170, quality: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      saasModernJson {
        PORTFOLIO_COMERCIAL {
          portfolioItem {
            featuredIn
            view
            title
            description2
            Youtube
          }
        }
      }
    }
  `);

  const { 
    featuredIn,
    view,
    title,
    description2,
    Youtube } = data.saasModernJson.PORTFOLIO_COMERCIAL[1].portfolioItem[0];

  // close button for modal
  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  const ModalContent = () => (
    <VideoWrapper>
      <iframe
        title="Video"
        src={Youtube}
        frameBorder="0"
      />
    </VideoWrapper>
  );

  

  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content={featuredIn} />
                <Text
                  {...discountText}
                  content={view}
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...titles}
              content={title}
            />
            <Text
              {...description}
              content={description2}
            />
            <Box {...buttonWrapper}>
              <Button 
                {...button}
                title="DESCUBRE CÓMO TRABAJA"
                icon={<Icon icon={ic_play_circle_filled} size={30} />}
                iconPosition="left"
                onClick={handleVideoModal}
              />
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal> 
                <Image fluid={data.bannerImage.childImageSharp.fluid} alt="ADAWARE, Asesores" />
                <PlayButton tabIndex="1000" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal>
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  titles: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '90%', '90%', '80%'],
    mb: '40px',
  },
  imageWrapper: {
    width: '100%',
  },
  titles: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['18px', '24px', '24px', '26px', '26px'],
    fontWeight: '700',
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#9fc3ed',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
