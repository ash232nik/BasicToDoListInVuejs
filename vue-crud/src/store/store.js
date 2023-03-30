// import Vue from "vue";
import Vuex from "vuex";
// Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    listData: [
      { title: "List 1", description: "Lorem ipsum dolor sit amet." },
      { title: "List 2", description: "Lorem ipsum dolor sit amet." },
      { title: "List 3", description: "Lorem ipsum dolor sit amet." },
      { title: "List 4", description: "Lorem ipsum dolor sit amet." },
      { title: "List 5", description: "Lorem ipsum dolor sit amet." },
    ],
  },
  mutations: {
    AddList(state, n) {
      console.log("state", n);
      state.listData.push(n);
      console.log("state check", state);
    },
    EditList(state, payload) {
      console.log("state check 2", payload);
      state.listData[payload.id] = payload.obj;
    },
    DeleteList(state, n) {
      //   state.listData.pop(n);
      // console.log(state, "sksj");
      state.listData.splice(n, 1);
    },
  },
});
