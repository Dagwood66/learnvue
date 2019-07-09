import Vue from 'vue'
import Vuex from 'vuex'
import test from "./modules/test"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isAdd: false,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateIsAdd(state, isAdd) {
      state.isAdd = isAdd;
    }
  },
  modules: {
    test
  }
});
