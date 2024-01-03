import styled from 'styled-components';
import { theme } from 'styles';

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.radii.sm};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 1px solid ${theme.colors.accent};
  }
`;
