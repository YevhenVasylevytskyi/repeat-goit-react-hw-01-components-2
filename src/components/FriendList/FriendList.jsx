import React from 'react';
import PropTypes from "prop-types";

const FriendList = () => {
  return (
    <ul class="friend-list">
      
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