import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import SolutionSectionWrapper from './solutionSection.style';
import { SOLUTION_ITEMS, SOLUCION_PIC } from 'common/src/data/SaasModern';

const SolutionSection = ({
  row,
  col,
  title,
  featureCol,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  featureTitle,
  featureDescription,
  iconStyle,
}) => {
  return (
    <SolutionSectionWrapper id="solutionSection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Operar tu negocio con tecnología bien aplicada puede ser la diferencia entre crecer y el caos."
                  {...title}
                />
              }
              description={
                <Text
                  content="Para facilitarte esta labor, hemos diseñado nuestro servicio con el fin de asesorarte las mejores soluciones contables y administrativas."
                  {...description}
                />
              }
            />
          </Box>
        </Box>
        <Box className="row" {...row} {...textArea}>
          {SOLUTION_ITEMS.map((feature, index) => (
            <Box
              className="col"
              {...featureCol}
              key={`solution_feature-${index}`}
            >
              <FeatureBlock
                icon={<i className={feature.icon} />}
                iconPosition="left"
                iconStyle={iconStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Container fluid noGutter className="info-sec-container">
        <Box className="row" {...row} {...imageAreaRow}>
          <Box className="col" {...col} {...imageArea}>
            <Card {...imageWrapper}>
              <Fade right delay={90}>
                <Image src={SOLUCION_PIC.image} alt="Soluciones ADAWARE" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
    </SolutionSectionWrapper>
  );
};

SolutionSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureCol: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
};

SolutionSection.defaultProps = {
  // Solution section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Solution section iamge row default style
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  // Solution section col default style
  col: {
    pr: '15px',
    pl: '15px',
  },
  // Solution feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: '15px',
    pl: '15px',
  },
  // Solution section text area default style
  textArea: {
    width: [1, '100%', '100%', '70%', '64%'],
  },
  // Solution section image area default style
  imageArea: {
    width: [1, '100%', '100%', '30%', '38%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  // Solution section image wrapper default style
  imageWrapper: {
    boxShadow: 'none',
  },
  // Solucion - Solution section title default style
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '40px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },

  // Solution section description default style
  description: {
    fontSize: ['16px', '16px', '16px', '18px', '18px'],
    color: '#343d48',
    lineHeight: '1.5',
    mb: '33px',
  },
  // feature icon default style
  iconStyle: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    bg: '#9090A5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    color: '#ffffff',
    overflow: 'hidden',
    mt: '6px',
    mr: '22px',
    flexShrink: 0,
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48',
  },
};

export default SolutionSection;
