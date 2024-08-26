import React from 'react';
import Profile from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
export const App = () => {
  return (
    <div className="app-container flex justify-center items-center min-h-screen bg-gray-100">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
    </div>
  );
};
export default App;