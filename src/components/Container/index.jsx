import Side, { ContainerStyled } from "./index";
import Input from "../Input/index.jsx";
import { useEffect, useState } from "react";

const Container = () => {
  const [users, setUsers] = useState([]);
  const [skillsArr, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [localStore, setLocal] = useState(false);
  const [removeIndexStore, setIndex] = useState(false);
  const [age, setAge] = useState("");
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setSkills([...skillsArr, event.target.value]);
      event.target.value = "";
    }
  };
  const removeIndex = () => {
    localStorage.setItem("allUsers", JSON.stringify(users));
  };
  useEffect(() => {
    if (users?.length > 0) {
      const currentUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      currentUsers.push(users[users.length - 1]);
      localStorage.setItem("allUsers", JSON.stringify(currentUsers));
    }
  }, [localStore]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("allUsers")) != users) {
      setUsers(JSON.parse(localStorage.getItem("allUsers")));
    }
  }, [removeIndexStore]);
  return (
    <ContainerStyled>
      <Side.Left>
        <div>Digite os dados do usuário</div>
        <div>
          <Input name="Nome" type="text" returnValue={setName}></Input>
          <Input name="Idade" type="number" returnValue={setAge}></Input>
          <Input name="Skills" onKeyUp={addTags}></Input>
        </div>
        <button
          disabled={!skillsArr.length > 0 || !name || !age}
          onClick={() => {
            const newUser = { skillsArr: skillsArr, name: name, age: age };
            setUsers([...(users || []), newUser]);
            setLocal(!localStore);
            setSkills([]);
          }}
        >
          <div>Cadastrar usuário</div>
        </button>
      </Side.Left>
      <Side.Right>
        <div>Resultado:</div>
        <div>
          {users?.map((element, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Side.Right.Label>
                  <div>
                    Nome<div>:</div>
                  </div>
                  <div>{element.name}</div>
                </Side.Right.Label>
                <Side.Right.Label age>
                  <div>
                    Idade<div>: </div>
                  </div>
                  <div> {element.age}</div>
                </Side.Right.Label>
                <Side.Right.Label>
                  <div>
                    Skills<div>: </div>
                  </div>
                  <div>
                    {element?.skillsArr?.map((elem, index) => (
                      <span key={index}>
                        {elem}
                        {index < element.skillsArr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </Side.Right.Label>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const currentUsers = users;
                  currentUsers.splice(idx, 1);
                  setUsers(currentUsers);
                  removeIndex();
                  setIndex(!removeIndexStore);
                }}
              >
                X
              </div>
            </div>
          ))}
        </div>
      </Side.Right>
    </ContainerStyled>
  );
};

export default Container;
