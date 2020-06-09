export const state = () => ({
  mobile: false,
  tab: false,
});

export const mutations = {
  setMobile(state, value) {
    state.mobile = value;
  },
  setTab(state, value) {
    state.tab = value;
  },
  setState(state, { mobile, tab }) {
    state.mobile = mobile;
    state.tab = tab;
  },
};

export const getters = {
  getMobileState(state) {
    return state.mobile;
  },
  getTabState(state) {
    return state.tab;
  },
};
