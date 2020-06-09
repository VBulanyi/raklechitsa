import axios from 'axios';

export const state = () => ({
  users: [],
  currentUser: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchUsersApi(state) {
    return axios.get(`${process.env.BASE_URL}/stories/`).then(response => {
      return state.commit('setState', {
        name: 'users',
        value: response.data.sort(function() {
          return Math.random() - 0.5;
        }),
      });
    });
  },

  fetchUsersApiWithID(state, payload) {
    return axios
      .get(`${process.env.BASE_URL}/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentUser',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getUsers(state) {
    return state.users;
  },
  getCurrentUsers(state) {
    return state.currentUser;
  },
};
