import React from 'react';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../state/user.json';
import data from '../state/data.json';
import friends from '../state/friends.json';
import transactions from '../state/transactions.json'

export const App = ({ title = null }) => {  

  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title={title}
        stats={data} />
      <FriendList        
        friends={friends}
      />
      <TransactionHistory
        item={transactions}
      />
    </>
  );
};