import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasModernTheme } from 'common/src/theme/saasModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasModern/sassModern.style';

import Navbar from '../containers/SaasModern/Navbar';
import BannerSection from '../containers/ContpaqiXMLenLinea/Banner';
import UpdateScreen from '../containers/ContpaqiXMLenLinea/UpdateScreen';
import TrialSection from '../containers/ContpaqiXMLenLinea/Trial';

import Footer from '../containers/SaasModern/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO title="CONTPAQi® XML en línea + - ADAWARE" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of Home head section */}
        {/* Start Home wrapper section */}
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BannerSection />
          <UpdateScreen />
          <TrialSection />

          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
