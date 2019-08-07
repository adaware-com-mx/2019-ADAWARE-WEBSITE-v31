import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import SocialProfile from '../SocialProfile';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from 'common/src/assets/image/saasModern/logo.png';

const Footer = ({
  row,
  row1,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasModernJson {
        FOOTER_WIDGET {
          title
          menuItems {
            text
            url
          }
        },
        SOCIAL_PROFILES {
          icon
          url
        }
      }
      pdfpriv: file(
        relativePath: {eq: "image/nosotros/2019-AvisoPrivacidad-ADAWARE.pdf"}) {
        publicURL
        name
      }
    }
  `);


  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Link to="/">
            <Logo
              logoSrc={LogoImage}
              title="ADAWARE"
              logoStyle={logoStyle}
            />
            </Link>
            <Text content="hola@adaware.com.mx" {...textStyle} />
            <Text content="+52 (55) 3640-5410" {...textStyle} />
            <SocialProfile items={Data.saasModernJson.SOCIAL_PROFILES} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.saasModernJson.FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Link to={item.url} className="ListItem">
                        {item.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="row" {...row1}>
          <a href={Data.pdfpriv.publicURL} className="ListItem2">
            Aviso de Privacidad
          </a>
        </Box>

      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  row1: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Priv
  row1: {
    width: [1, 1, 1, 1],
    flexBox: true,
    flexWrap: 'wrap',
    ml: 'auto',
    mr: 'auto',
    color: '#343d48',
    fontSize: '14px',
    fontWeight: '700',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
