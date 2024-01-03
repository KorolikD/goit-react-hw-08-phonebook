import styled from 'styled-components';
import { theme } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  margin: 0;
`;

export const Button = styled.button`
  padding: ${theme.spacing(2)} ${theme.spacing(3)};

  background-color: ${theme.colors.light};
  border-radius: ${theme.radii.sm};
  font-size: ${theme.fontSizes.medium};

  &:hover,
  :focus {
    background-color: ${theme.colors.accent};
    transition: ${theme.animation.cubicBezier};
  }
`;
