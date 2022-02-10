import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;

  width: 100%;

  display: flex;
  > div:first-child {
    padding-right: 10px;
  }
  > div {
    height: 100%;
    align-content: center;
    text-align: center;
    justify-content: center;
  }
  > {
    padding: 10px;
  }
`;

export const InputStyle = styled.input`
  border-radius: 10px;
  background-color: #fff2e7;
  border: none;
  height: 50px;
`;
