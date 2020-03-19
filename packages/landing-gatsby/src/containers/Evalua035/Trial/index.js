import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'gatsby-image';
import Container from 'common/src/components/UI/Container';


const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  const data = useStaticQuery(graphql`
    query {
      VendorLogos: file(
        relativePath: { eq: "image/contpaqiContabilidad/vendor-logos-contabilidad.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 424, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      saasModernJson {
        PORTFOLIO_SHOWCASE {
          portfolioItem {
            price
            buttonLabel
            featuredLink
            love
            trialdesc
          }
        }
      }
    }
  `);

  const { 
    price,
    buttonLabel,
    featuredLink,
    love,
    trialdesc,
  } = data.saasModernJson.PORTFOLIO_SHOWCASE[0].portfolioItem[0];

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image fluid={data.VendorLogos.childImageSharp.fluid} alt="Vendor Logo"  {...ImageOne} />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content={"Cómpralo desde MXN "+price+" + IVA"}
            />
            <Text
              {...description}
              content={trialdesc}
            />
            <Box {...buttonWrapper}>
              <a href={featuredLink}>
                <Button title={buttonLabel} {...btnStyle} />
              </a>
              {love ? (
                <a href={love}>
                  <Button
                    title=" Descarga ficha técnica"
                    variant="textButton"
                    {...outlineBtnStyle}
                  />
                </a>
                ) : (
                  ''
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['80%', '80%', '80%', '60%'],
  },
  imageArea: {
    width: ['80%', '424px', '424px'],
    mb: ['35px', '35px', '40px', '40px'],
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary',
  },
};

export default TrialSection;
