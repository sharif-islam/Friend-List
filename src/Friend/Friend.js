import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Friend.css";

const Friend = (props) => {
  const { name, image, email, income } = props.friend;
  return (
    <div class="mainArea">
      <div className="imagePart">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2>Name : {name}</h2>
        <h3>Email : {email}</h3>
        <h3>Income : {income}</h3>
        <h4>street :{props.friend.address.street}</h4>
        <h4>City : {props.friend.address.city}</h4>
        <button onClick={() => props.handleClick(props.friend)}>
          <FontAwesomeIcon icon={faPlus} />
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Friend;
