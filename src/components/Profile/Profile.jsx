import React from "react";
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile bg-white border rounded-lg shadow-md p-6 w-80 m-4">
      <div className="description text-center mb-4">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="name text-xl font-semibold">{username}</p>
        <p className="tag text-gray-500">@{tag}</p>
        <p className="location text-gray-500">{location}</p>
      </div>

      <ul className="stats flex justify-around bg-gray-100 p-4 rounded-lg">
        <li className="text-center">
          <span className="label block text-gray-500">Followers</span>
          <span className="quantity block text-lg font-bold">{stats.followers}</span>
        </li>
        <li className="text-center">
          <span className="label block text-gray-500">Views</span>
          <span className="quantity block text-lg font-bold">{stats.views}</span>
        </li>
        <li className="text-center">
          <span className="label block text-gray-500">Likes</span>
          <span className="quantity block text-lg font-bold">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;