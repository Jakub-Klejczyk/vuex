import { createApp, VueElement } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    addCounter(state) {
      state.counter++;
    },
    lessCounter(state) {
      state.counter--;
    },
    setCounter(state, newVal) {
      state.counter = newVal;
    },
  },
  actions: {
    lessCounter(state) {
      setTimeout(() => {
        this.commit("lessCounter");
      }, 1000);
    },
  },
  getters: {
    multiplyCounter(state) {
      return state.counter * 2;
    },
  },
});
