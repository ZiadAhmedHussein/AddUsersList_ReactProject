
import classes from "./UserFormButton.module.css";

const UserFormButton = (props) => {
  return (
    <button className={classes["add-button"]} type="submit">Add User</button>
  );
};

export default UserFormButton;