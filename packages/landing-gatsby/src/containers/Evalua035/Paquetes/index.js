import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper from './service.style';
import { PAQUETES_ITEMS } from 'common/src/data/SaasModern';

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
  processImageStyle
}) => {
  return (
    <SectionWrapper>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="POR DÓNDE COMENZAR" />
          <Heading
            {...secHeading}
            content="Selecciona el paquete más adecuado para el tamaño de tu empresa"
          />
          <Text
            {...secDes}
            content="Evalúa035 es un sistema en la nube con licenciamiento anual que se adquiere por paquete de trabajadores para una sola empresa."
          />
        </Box>

        <Box {...Row}>
          {PAQUETES_ITEMS.map((item, index) => (
            <Box
              {...Col}
              key={`service-item-${index}`}
              className="service_item_col"
            >
              <Box className="service_item">
                <Box className="service_icon">
                  <Image
                    src={item.icon}
                    alt={`process-image-${index + 1}`}
                    {...processImageStyle}
                  />
                </Box>
                <Heading as="h3" content={item.title} {...serviceTitleStyle} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
  processImageStyle: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#f15a24',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    maxWidth: '100%',
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px'],
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px',
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#f15a24',
    mb: 0,
  },
  secDes: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#343d48',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '700px',
    maxWidth: '80%',
    textAlign: 'center',
  },
  processImageStyle: {
    width: ['60px', '60px', '70px', '70px'],
  },
};

export default ServiceSection;
