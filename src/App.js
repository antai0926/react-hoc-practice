import React from 'react';
import './App.scss';

import UserProfile from './component/user-profile/user-profile.component';
import UserList from './component/user-list/user-list.component';

function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile name="Antai" email="antai0926@gmail.com" />
    </div>
  );
}

export default App;
