export const state = () => ({
  popupShown: false,
  contactsForm: false,
  shareShown: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.popupShown = !state.popupShown);
  },
  toggleContactsForm(state) {
    return (state.contactsForm = !state.contactsForm);
  },
  togglShare(state) {
    return (state.shareShown = !state.shareShown);
  },
};

export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
  getcontactsFormShown(state) {
    return state.contactsForm;
  },
  getShareShown(state) {
    return state.shareShown;
  },
};
