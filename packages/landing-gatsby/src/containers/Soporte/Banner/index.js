import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import { BannerWrapper } from './banner.style';
import BannerImage from 'common/src/assets/image/servicios/banner-image.png';



const BannerSection = ({
  row,
  contentWrapper,
  title,
  description,
  imageWrapper,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <Heading
              {...title}
              content="¿Necesitas ayuda?"
            />
            <Text
              {...description}
              content="Página de Soporte para Clientes de ADAWARE, para resolver problemas en las soluciones administrativas, contables y de seguridad TI. 
              "
            />
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <Image src={BannerImage} alt="Imagen de Soporte Técnico ofrecido en ADAWARE" />
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
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
};

export default BannerSection;
