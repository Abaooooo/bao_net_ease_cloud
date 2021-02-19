import * as types from "./types/mutationTypes";

export default {
  namespaced: true,
  state() {
    return {
      userPhone: {},
    };
  },

  mutations: {
    [types.CHANGE_USERPHONE](state, payload) {
      state.userPhone = payload;
      console.log(state.userPhone);
    },
  },

  actions: {},

  getters: {},
};
