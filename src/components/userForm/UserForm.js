import { useState } from "react";
import classes from "./UserForm.module.css";

import Card from "../UI/Card";
import UserFormButton from "./UserFormButton";
import InvaleedMessage from "./InvaleedMessage";

const UserForm = (props) => {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [valedChecker, setValedChecker] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (userName !== "" && userAge !== "") {
      if (!isNaN(+userName)) {
        setValedChecker("Invaled Username: Username Can Not Be Number .")
        setUserName("");
        setUserAge("");
      } else if (+userAge === 0 || +userAge < 0) {
        setValedChecker("Invaled Userage: Userage Must Be > 0 .")
        setUserName("");
        setUserAge("");
      }else {
        const data = {id:Math.random().toString(), name: userName, age: userAge};
        props.onUserData(data);
        setUserName("");
        setUserAge("");
      }
    } else {
      setValedChecker("Invaled Input Value: Username Or Userage Can Not Be Empty")
      setUserName("");
      setUserAge("");
    };
  };

  const fixInvaledInputs = (fixer) => {
    if (fixer) {
      setValedChecker("");
    };
  };

  return (
    <Card>
      <form className={classes["user-form"]} onSubmit={ submitFormHandler }>
        <div className={classes["user-form__inputs"]}>
          <div className={classes["user-form__input"]}>
            <label>Username</label>
            <input type="text" onChange={ userNameHandler } value={ userName }/>
          </div>
          <div className={classes["user-form__input"]}>
            <label>Age (Year)</label>
            <input type="number" step="1" onChange={ userAgeHandler } value={ userAge } />
          </div>
          <div className={classes["user-form__action"]}>
            <UserFormButton />
          </div>
        </div>
      </form>
      {valedChecker.length > 0 && <InvaleedMessage onFixInvaledInput={fixInvaledInputs} checkerMessage={valedChecker} />}
    </Card>
  );
};

export default UserForm;