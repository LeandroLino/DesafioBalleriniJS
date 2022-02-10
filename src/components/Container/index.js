import styled from "styled-components";

export const ContainerStyled = styled.div`
  font-family: "Concert One", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #483636;
  border-radius: 20px;

  border: 2px solid #fff2e7;

  font-size: 20pt;
`;

const Side = styled.div`
  color: #fff2e7;

  width: 33vw;
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

Side.Right = styled(Side)`
  border-left: 1px solid #fff2e7;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  > div:not(:first-child) {
    > div {
      position: relative;
      padding-top: 15px;
      padding-left: 20px;
      height: 50%;
      width: 80%;
      display: flex;
      justify-content: space-between;
    }

    height: 75%;
    overflow: scroll;
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

Side.Left = styled(Side)`
  border-right: 1px solid #fff2e7;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > div:not(:first-child) {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  > div:first-child {
    height: 11%;
    width: 40%;
    text-align: center;
  }
  > button {
    width: 50%;
    height: 15%;
    border-radius: 10px;

    border: none;

    background-color: #fff2e7;
    color: #2f2325;
    :hover {
      background-color: rgba(255, 242, 231, 0.5);
    }
    transition: background-color 0.1s;
    font-family: "Concert One", sans-serif;
    font-size: 20pt;
    > div {
      display: flex;
      height: 70%;
      line-height: 1em;
    }
  }
`;

Side.Right.Label = styled.div`
  color: #97d4d9;

  display: flex;

  > div {
    display: flex;
    > div {
      color: #fff;
    }
  }
  > div:not(:first-child) {
    color: ${(props) => (!props.age ? "#efc764" : "#B3DFD3")};
    padding-left: 5px;
    ${(props) => (!props.age ? { display: "flex", flexWrap: "wrap" } : "")}
  }
`;

export default Side;
