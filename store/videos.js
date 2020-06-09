import axios from 'axios';

export const state = () => ({
  videos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchVideos(state) {
    return axios.get(`${process.env.BASE_URL}/videos/`).then(response => {
      return state.commit('setState', {
        name: 'videos',
        value: response.data,
      });
    });
  },
};

export const getters = {
  getVideos(state) {
    return state.videos;
  },
};
