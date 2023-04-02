import React from 'react';
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {

  return (
    <ul className={s.friendList}>  
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.item} key={id}>
          <span
            className={`${s.status} ${isOnline ? s.online : s.offline}`}
          ></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))} 
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })),
};

export default FriendList;