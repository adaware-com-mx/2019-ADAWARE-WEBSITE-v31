import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import PartnerSectionWrapper from './partner.style';
import Partner from 'common/src/assets/image/saasModern/partner.png';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  descriptionButton,
  button,
  textArea,
  imageArea,
}) => {
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={Partner} alt="Imagen Socios comerciales" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Necesitas soluciones poderosas"
            />
            <Text
              {...description}
              content="Software que sirva de puente entre los procesos internos y el éxito de tu empresa."
            />
            <Box>
              <Link to="/contpaqi">
                <Text
                {...descriptionButton}
                content="Quiero aprender Soluciones Administrativas."
                />
                <Button {...button} title="MUÉSTRAME" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  descriptionButton: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
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
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '18px',
    color: '#343d48',
    lineHeight: '1.75',
    mb: '33px',
  },
  descriptionButton: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#767676',
    lineHeight: '1.75',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default PartnerSection;
