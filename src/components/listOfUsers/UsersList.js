
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  let dataList;

  if (props.storedData.length === 0) {
    dataList = <div className={`${classes["user-data"]} ${classes["no-data"]}`}>No Data To Show</div>
  } else {
    dataList = props.storedData.map((userData) => {
      return <div key={userData.id} className={`${classes["user-data"]}`}>{`${userData.name} (${userData.age} years old)`}</div>
    });
  };

  return (
    <Card>
      { dataList }
    </Card>
  );
};

export default UsersList;