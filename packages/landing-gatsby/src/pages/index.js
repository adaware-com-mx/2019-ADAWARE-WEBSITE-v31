import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasModernTheme } from 'common/src/theme/saasModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasModern/sassModern.style';

import Navbar from '../containers/SaasModern/Navbar';
import BannerSection from '../containers/SaasModern/Banner';
import WorkingProcessSection from '../containers/SaasModern/WorkingProcess';

import SolutionSection from '../containers/SaasModern/SolutionSection';
import ServiceSection from '../containers/SaasModern/Service';
import InfoSectionContpaq from '../containers/SaasModern/Contpaq1';
import InfoSectionLeft from '../containers/SaasModern/Info-left';
import PricingSection from '../containers/SaasModern/Pricing';
import PartnerSection from '../containers/SaasModern/Partner';
import FaqSection from '../containers/SaasModern/Faq';
import TrialSection from '../containers/SaasModern/Trial';

import FeatureSection from '../containers/SaasModern/Feature';
import UpdateScreen from '../containers/SaasModern/UpdateScreen';
import TestimonialSection from '../containers/SaasModern/Testimonial';
import Footer from '../containers/SaasModern/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO title="ADAWARE, asesores de las mejores soluciones contables y administrativas" />
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
          <WorkingProcessSection />
          <SolutionSection />
          <ServiceSection />
          <InfoSectionContpaq />
          <InfoSectionLeft />

          {/* <UpdateScreen />
          <PricingSection /> */}

          <TestimonialSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
