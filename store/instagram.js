import axios from 'axios';

export const state = () => ({
  photos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchIntstagram(state) {
    return axios
      .get('https://www.instagram.com/raklechitsa/?__a=1')
      .then(response => {
        return state.commit('setState', {
          name: 'photos',
          value: getPosts(response.data),
        });
      });
  },
};

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

export const getters = {
  getInstgramaPhotos(state) {
    return state.photos;
  },
};
