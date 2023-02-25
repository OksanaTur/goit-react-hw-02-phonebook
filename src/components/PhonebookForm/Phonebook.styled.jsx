import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
width: 400px;
border: 1px solid #202020;
padding: 8px;
display: flex;
flex-direction: column;
`;

export const FormInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: large;
  text-align: left;
  padding: 8px 20px 8px 14px;
  min-width: 185px;
`;

export const FormBtn = styled.button`
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: rgba(23, 26, 32, 0.8);
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;

  &:hover{
  background-color: rgba(23, 26, 32, 1);
  cursor: pointer;
  }
`;