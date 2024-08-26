import React from 'react';
import Profile from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
import Statistics from '../components/Statistics/Statistics';

   const data = [
    { label: '.docx', percentage: '4%' },
    { label: '.mp3', percentage: '14%' },
    { label: '.pdf', percentage: '41%' },
    { label: '.mp4', percentage: '12%' },
  ];
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
    <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
export default App;