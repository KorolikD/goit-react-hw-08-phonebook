import styled from 'styled-components';
import { theme } from 'styles';

export const Title = styled.p`
  margin-bottom: ${theme.spacing(5)};

  font-weight: 500;
  font-size: 28px;
  line-height: 1.17;
  text-align: center;

  color: ${theme.colors.dark};
`;

export const HorizontalLine = styled.hr`
  margin: 32px;
`;

export const TitleH2 = styled.p`
  margin-bottom: ${theme.spacing(5)};

  font-weight: 500;
  font-size: 28px;
  line-height: 1.17;
  text-align: center;

  color: ${theme.colors.dark};
`;
