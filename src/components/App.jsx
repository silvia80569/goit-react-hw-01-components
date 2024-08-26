import React from 'react';
import Profile from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/Friends/FriendsList';
import TransactionHistory from '../components/Transactions/TransactionHistory';

const data = [
  { label: '.docx', percentage: '4%' },
  { label: '.mp3', percentage: '14%' },
  { label: '.pdf', percentage: '41%' },
  { label: '.mp4', percentage: '12%' },
];
const friends = [
  {
    id: 1,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
    name: 'Mango',
    isOnline: true,
  },
  {
    id: 2,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998730.png',
    name: 'Kiwi',
    isOnline: false,
  },
  {
    id: 3,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998779.png',
    name: 'Ajax',
    isOnline: true,
  },
  {
    id: 4,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998763.png',
    name: 'Jay',
    isOnline: false,
  },
];

const transactions = [
  { id: '1', type: 'Invoice', amount: '125', currency: 'USD' },
  { id: '2', type: 'Withdrawal', amount: '85', currency: 'USD' },
  { id: '3', type: 'Deposit', amount: '1000', currency: 'EUR' },
  { id: '4', type: 'Payment', amount: '250', currency: 'GBP' },
];

export const App = () => {
  return (
    <div className="app-container flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 space-y-8">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
