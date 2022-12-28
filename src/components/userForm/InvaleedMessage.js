import { useState } from "react";
import classes from "./InvaleedMessage.module.css";

const InvaledMessage = (props) => {

  const [fixer, setFixer] = useState(false);

  const fixError = () => {
    setFixer(true)
  };

  props.onFixInvaledInput(fixer);
  
  return (
    <div onClick={fixError} className={ classes.overlay }>
      <div className={classes["message-content"]}>
        <h2>Invaled Input</h2>
        <p>{props.checkerMessage}</p>
        <div className={classes["message-action"]}>
          <button onClick={fixError} type="button">Ok</button>
        </div>
      </div>
    </div>
  );
};

export default InvaledMessage;