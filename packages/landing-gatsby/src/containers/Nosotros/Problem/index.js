import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import SectionWrapper from './service.style';

const ProblemSection = ({
  secTitleWrapper,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {
  return (
    <SectionWrapper>
      <Container>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content="La productividad, la falta de control y el área administrativa entre los problemas más comunes que se presentan en cualquier empresa."
          />
          <Text
            {...secDes}
            content="¿Qué te parece la idea de transformar tu negocio en una empresa eficiente y calificada, con personal conocedor del valor de los procesos administrativos adecuados?"
          />
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ProblemSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secDes: PropTypes.object,
};

ProblemSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
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
    maxWidth: '80%',
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
};

export default ProblemSection;
