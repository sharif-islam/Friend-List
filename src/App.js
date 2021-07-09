import logo from "./logo.svg";
import "./App.css";
import Friend from "./Friend/Friend";
import Cart from "./Cart/Cart";
import data from "./data/data.json";
import { useEffect, useState } from "react";

function App() {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    setFriend(data);
  }, []);
  const [selectFriend, setSelectFriend] = useState([]);
  const handleClick = (item) => {
    console.log(item);
    const newItem = [...selectFriend, item];
    setSelectFriend(newItem);
  };
  const totalIncome = selectFriend.reduce(
    (total, data) => total + data.income,
    0
  );
  return (
    <div className="mainArea">
      <div className="friendList">
        {data.map((friend) => (
          <Friend handleClick={handleClick} friend={friend}></Friend>
        ))}
      </div>
      <div className="cartArea">
        <div className="detail">
          <h3>Total selected Friends : {selectFriend.length}</h3>
          <h3>Total Selected friends Income : {totalIncome}</h3>
          <h3>Selected Friends List : </h3>
        </div>
        {selectFriend.map((data) => (
          <Cart friend={data}></Cart>
        ))}
      </div>
    </div>
  );
}

export default App;
