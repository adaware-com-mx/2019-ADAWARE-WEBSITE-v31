import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import InfoSectionWrapper from './info-left.style';

import ImageOne from 'common/src/assets/image/saasModern/info1.png';
import ImageTwo from 'common/src/assets/image/saasModern/info2.png';

const InfoSectionLeft = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  return (
    <InfoSectionWrapper>
      <Box {...sectionWrapper}>
        <Container>
          <Box {...row}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Toma el control gestiona tu información en tiempo real"
                />
                <Text
                  {...description}
                  content="Crea, modifica, re-distribuye y administra tu centro de datos virtual de forma ágil y sencilla, con libertad y autonomía con un potente panel de control web en tiempo real."
                />
                <Box>
                  <Link to="gigas">
                      <Button {...button} title="COMIENZA CONOCIENDO BENEFICIOS" />
                  </Link>
                </Box>
              </Fade>
            </Box>
          </Box>
        </Container>
        <Container fullWidth noGutter className="info-sec-container">
          <Box {...row} {...imageAreaRow}>
            <Box {...col} {...imageArea}>
              <Card {...imageWrapper} {...imageWrapperOne}>
                <Fade right>
                  <Image src={ImageOne} alt="Imagen de Gigas Cloud Datacenter" />
                </Fade>
              </Card>
              <Card {...imageWrapper} {...imageWrapperTwo}>
                <Fade bottom>
                  <Image src={ImageTwo} alt="Beneficios del Cloud Datacenter de Gigas" />
                </Fade>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </InfoSectionWrapper>
  );
};

InfoSectionLeft.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  sectionWrapper: PropTypes.object,
};

InfoSectionLeft.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px', '80px'],
    pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    color: '#fff',
    colors: 'secondaryWithBg',
    height: `{5}`,
  },
};

export default InfoSectionLeft;
