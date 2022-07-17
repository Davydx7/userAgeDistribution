import { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import 'App.css';
import LineChart from 'Components/LineChart';

// mock data
import users from 'DB/users';

import userStore from 'Store/mobX';

// console.log(users);

const App = observer(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    userStore.fetchUsers(users);
    // console.log(users);
    console.log(userStore.userData[0].name);
  }, []);

  return (
    <div className="App">
      <LineChart />
      {userStore.userData.length && <p>{userStore.userData[0].name}</p>}
      <canvas id="myChart" width="400" height="400" />
      <div className="card">
        <button onClick={() => setCount((counti) => counti + 1)}>count is {count}</button>
      </div>
    </div>
  );
});

export default App;
