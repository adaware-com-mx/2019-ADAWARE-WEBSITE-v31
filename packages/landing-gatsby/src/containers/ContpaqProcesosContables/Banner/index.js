import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Icon from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from './banner.style';

import { SOCIAL_PROFILES } from 'common/src/data/SaasModern/index';
import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';


const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  const data = useStaticQuery(graphql`
    query {
      saasModernJson {
        PORTADA_CONTPAQI {
          titulo1
          titulo2
          titulo3
          subtitulo
          descripcion
        }
      }
      portada: file(relativePath: { eq: "image/ContpaqProcesosContables/person.png" }) {
        childImageSharp {
          fixed(width: 767) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  const { titulo1, titulo2, titulo3, subtitulo, descripcion } = data.saasModernJson.PORTADA_CONTPAQI;

  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content={titulo1} {...greetingStyle} />
            <Heading content={titulo2} {...nameStyle} />
            <Heading content={titulo3} {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: '#e6e6e6' }}
                size={22}
              />
              <Heading content={subtitulo} {...roleStyle} />
            </Box>
            <Text
              content={descripcion}
              {...aboutStyle}
            />
            
          </Box>
          <Box {...imageArea} className="image_area">
            <Img
              fixed={data.portada.childImageSharp.fixed}
              alt="Distintivo CONTPAQi Distribuidor Asociado Master"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
  },
};

export default BannerSection;
