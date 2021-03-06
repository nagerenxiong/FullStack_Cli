'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://localhost:7001';

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {
      return axios.get(`${host}/app/api/article/list`)
        .then(response => {
          let data = response.data.list;
          commit(Type.SET_ARTICLE_LIST, data);
          return data;
        })
    }
    return Promise.resolve();
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    if (state.article.id != id) {
      return axios.get(`${host}/app/api/article/${id}`)
        .then(response => {
          let data = response.data;
          commit(Type.SET_ARTICLE_DETAIL, data);
        })
    }
    return Promise.resolve();
  },
  // gettest({ commit }, data) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('').then(res => {
  //       resolve(res)
  //     }).catch(reject)
  //   })
  // }
};

export default actions;


