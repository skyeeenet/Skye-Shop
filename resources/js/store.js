import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {

    api_token: localStorage.getItem('api_token'),
  },

  mutations: {

    setApiToken(state, token) {

      state.api_token = token;

      localStorage.setItem('api_token', token);
    }
  },

  getters: {

    getToken(state) {

      return state.api_token;
    }
  }
});

export default store;