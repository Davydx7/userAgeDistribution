import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import './App.css';
import LineChart from './components/LineChart';

// mock data
import users from './mockDB/users';

import userStore from './store/mobX';

// console.log(users);

const App = observer(() => {
  useEffect(() => {
    // supposed API call
    userStore.fetchUsers(users);
  }, [userStore]);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // hide list with chart
    userStore.setShowList(false);
  };

  return (
    <div className="App">
      <h2>User Age Distribution</h2>
      <h3>Click/tap on any point on the map to see list of users in the age groups</h3>
      <div className="topbar">
        <button onClick={handleClick}>{show ? '- Hide Chart -' : '+ Show Chart +'}</button>
      </div>
      <div className={`chart ${show ? 'open' : ''}`}>{show && <LineChart />}</div>
      <div className={`list ${show && userStore.showList ? 'open' : ''}`}>
        <span>Users</span>
        <ul>
          {userStore.userData.length &&
            Object.values(userStore.ageGroup)[userStore.activeIndex].map((name: string) => (
              <li key={name}>{name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
});

export default App;
