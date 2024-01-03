import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

export const NavigateLink = styled(NavLink)`
  display: inline-block;
  padding: ${theme.spacing(3)};
  color: ${theme.colors.dark};
  cursor: pointer;
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;

  &.active {
    color: ${theme.colors.accent};
  }

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    transition: ${theme.animation.cubicBezier};
  }
`;
