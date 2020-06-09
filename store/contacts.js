export const state = () => ({
  contacts: {},
});

export const mutations = {
  setState(state, value) {
    return (state.contacts = value);
  },
};

export const getters = {
  getContacts(state) {
    return state.contacts;
  },
};

export const actions = {
  async SUBMIT_CONTACTS(state, { contacts }) {
    return state.commit('setState', {
      contacts,
    });
  },
};
