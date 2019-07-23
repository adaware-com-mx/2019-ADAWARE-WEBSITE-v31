import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const PortfolioShowcaseWrapper = styled.div`
  @keyframes FadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .glide__controls2 {
    position: absolute;
    bottom: -12px;
    right: 0;
    @media (max-width: 990px) {
      bottom: 23px;
    }
    @media (max-width: 575px) {
      top: -50px;
      right: 50%;
      bottom: auto;
      transform: translateX(50%);
    }
  }

  .rc-tabs-bar {
    margin-bottom: 35px;
    .rc-tabs-nav-scroll {
      .rc-tabs-nav {
        .rc-tabs-tab {
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }

  .rc-tabs-content {
    .rc-tabs-tabpane {
      display: none;
      overflow: initial;

      &.rc-tabs-tabpane-active {
        display: block;
        animation: 0.7s FadeInUp;
      }
    }
  }

  .rc-tabs-ink-bar {
  }

  .rc-tabs-top {
  }
`;

export const PortfolioShowcaseItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PortfolioLink = styled.div`
  margin-bottom: 36px;
  @media (max-width: 990px) {
    margin-bottom: 25px;
  }
  @media (max-width: 575px) {
    margin-bottom: 15px;
  }
  a {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Nanum Gothic', 'Open Sans', sans-serif;
    color: ${themeGet('colors.primary', '#336699')};
    position: relative;
    padding: 0 0 2px 8px;
    @media (max-width: 990px) {
      font-size: 15px;
    }
    @media (max-width: 575px) {
      font-size: 14px;
    }
    &:hover {
      color: ${themeGet('colors.secondary', '#f15a24')};
    }
  }
`;

export const BuiltWith = styled.div`
  margin-top: 15px;
  @media (max-width: 990px) {
    margin-top: 15px;
  }
  > span {
    display: inline-block;
    font-size: 14px;
    color: ${themeGet('colors.labelColor', '#767676')};
    font-family: 'Open Sans', sans-serif;
    padding: 5px 22px;
    position: relative;
    @media (max-width: 990px) {
      font-size: 14px;
      padding: 5px 10px;
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      &:after {
        display: none;
      }
    }
    &:after {
      content: '|';
      position: absolute;
      display: block;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
`;

export const PortfolioMeta = styled.div`
  flex: 0 0 100%;
  max-width: calc(100% - 200px);
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 990px) {
    margin-top: 50px;
    max-width: calc(100% - 100px);
  }
  @media (max-width: 575px) {
    margin-top: 30px;
    max-width: 100%;
    margin-bottom: 15px;
  }
`;

export const MetaItem = styled.span`
  margin-right: 45px;
  font-size: 14px;
  color: #343d48;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 990px) {
    font-size: 14px;
    margin-right: 25px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
  &:last-child {
    margin-right: 0;
  }

  &.meta_featured {
    font-weight: 500;
    margin-right: 70px;
    @media (max-width: 990px) {
      margin-right: 40px;
    }
    @media (max-width: 575px) {
      width: 100%;
      margin-bottom: 5px;
    }
    > a {
      margin-left: 0.4em;
    }
  }
  > a {
    color: ${themeGet('colors.secondary', '#f15a24')};
    font-weight: 700;
  }
  > b {
    font-family: 'roboto', sans-serif;
    margin-right: 5px;
  }
`;
