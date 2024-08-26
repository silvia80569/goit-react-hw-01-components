import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item flex items-center space-x-4 p-2 bg-white shadow rounded-lg">
      <span
        className={`status block w-3 h-3 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></span>
      <img
        className="avatar w-12 h-12 rounded-full"
        src={avatar}
        alt="User avatar"
      />
      <p className="name text-lg font-semibold">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
