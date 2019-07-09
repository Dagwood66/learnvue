import {TEST_UPDATE_STATUS} from "../mutation-types"

let store = {
  state: {
    status: 0,
    item: {}
  },
  mutations: {
    [TEST_UPDATE_STATUS](state, payload) {
      state.status = payload.status;
      state.item = {...payload};
    }
  }
};

export default {
  namespaced: true,
  ...store
}
