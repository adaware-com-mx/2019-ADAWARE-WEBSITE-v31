import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SocialProfileItem = styled.div`
  margin-right: 18px;
  a {
    color: ${themeGet('colors.primary', '#336699')};
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.secondary', '#f15a24')};
    }
  }
`;
