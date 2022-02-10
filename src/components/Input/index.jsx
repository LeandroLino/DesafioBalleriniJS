import { Container, InputStyle } from "./index";
const Input = ({ name, returnValue, onKeyUp, type }) => {
  const handleChanges = (e) => {
    returnValue(e.target.value);
  };
  return (
    <Container>
      <div>{name}</div>
      <InputStyle
        placeholder={name}
        type={type}
        onKeyUp={name == "Skills" ? (e) => onKeyUp(e) : null}
        onChange={name !== "Skills" ? handleChanges : null}
      ></InputStyle>
    </Container>
  );
};

export default Input;
