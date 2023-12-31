import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';
import { theme } from 'styles';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Field = styled(FormikField)`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.radii.sm};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 1px solid ${theme.colors.accent};
  }
`;

export const FormGroup = styled.label`
  position: relative;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 105%;
  left: 0;
  color: ${theme.colors.red};
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  margin-top: 8px;
  width: 120px;
  padding: ${theme.spacing(2)} 0;

  background-color: ${theme.colors.blue};
  border-radius: ${theme.radii.sm};
  box-shadow: ${theme.shadows.small};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: ${theme.colors.accent};
    transition: ${theme.animation.cubicBezier};
  }
`;
