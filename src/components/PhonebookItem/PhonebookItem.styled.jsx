import styled from "styled-components";

export const PhoneItem = styled.li`
display:flex;
justify-content:space-between;
 align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeleteBtn = styled.button`
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
  min-width: 100px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
 

  &:hover{
  background-color: rgba(23, 26, 32, 1);
  cursor: pointer;
  }
`;
