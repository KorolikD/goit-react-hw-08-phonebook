import styled from 'styled-components';
import { theme } from 'styles';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(4)};
`;

export const Header = styled.header`
  background-color: ${theme.colors.light};

  padding: 8px 0;
  box-shadow: ${theme.shadows.custom};
`;

export const HeaderContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${theme.spacing(4)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
