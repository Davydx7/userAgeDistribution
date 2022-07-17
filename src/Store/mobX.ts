import { makeObservable, observable, computed, action, flow, toJS } from 'mobx';
import { user } from '../DB/users';

type GraphData = {
  [key: string]: number;
};

type AgeGroup = {
  [key: string]: string[];
};

interface Store {
  userData: user[];
  graphData: GraphData; // data extract for graph
  ageGroup: AgeGroup; // data extract for agegroup name list
  getAggregate(): void;
  fetchUsers(u: user[]): void;
}

class UserStore implements Store {
  userData: user[] = [];

  graphData: GraphData = {};

  ageGroup: AgeGroup = {};

  constructor() {
    makeObservable(this, {
      userData: observable,
      graphData: observable,
      ageGroup: observable,
      getAggregate: action,
      fetchUsers: action
    });
  }

  // process data inot {age: count} format

  getAggregate(): void {
    const graphData: GraphData = {};
    const ageGroup: AgeGroup = {};

    this.userData.forEach((user: user) => {
      // extracting graphData
      if (graphData[user.age]) {
        graphData[user.age]++;
      } else {
        graphData[user.age] = 1;
      }

      // extracting ageGroup data
      if (ageGroup[user.age]) {
        ageGroup[user.age].push(user.name);
      } else {
        ageGroup[user.age] = [user.name];
      }
    });

    this.graphData = graphData;
    this.ageGroup = ageGroup;
  }

  fetchUsers(userData: user[]): void {
    // This should be calling an endpoint
    // const res = yield fetch('api/end/point/')
    // this.userData = res.json()

    // fetching static data for the demo
    this.userData = userData;

    // processing graphData and ageGroup immediately
    // as the data is already available and not going
    // to change after the fetch
    this.getAggregate();
  }
}

const userStore = new UserStore();

export default userStore;
