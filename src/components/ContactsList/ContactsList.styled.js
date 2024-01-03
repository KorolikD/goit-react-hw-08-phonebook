import styled from 'styled-components';
import { theme } from 'styles';

export const ListContacts = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 24px;
  text-align: center;
  gap: 18px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;
`;

export const BoldText = styled.span`
  font-weight: 500;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;

  border-radius: ${theme.radii.md};

  transition: ${theme.animation.cubicBezier};

  &:hover,
  :focus {
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.small};
  }
`;
