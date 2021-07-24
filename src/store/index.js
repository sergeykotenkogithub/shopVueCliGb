import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/core/requests'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { // глобальный объект в который с любого места можно обратиться
    basket: []
  },
  mutations: {  // для
    basket_load: (state, payload) => {  // чтобы положить что-то в массив, нужно вызвать мутацию, payload это то что мы пробрасываем
      state.basket = payload
    },
    basket_add: (state, item) => {
        state.basket.push(item);
    },
    basket_remove: (state, item) => {
        state.basket.splice(state.basket.indexOf(item), 1)
    },
    basket_change: (state, payload) => {
        payload.item.amount += payload.amount
    },
  },
  actions: { // вызов мутации
     async loadBasket({ commit }, url) { // payload - массив товаров из джейсона
        let payload = (await get(url)).content;
        commit('basket_load', payload)
     },
     changeBasketItems( { commit, state }, payload ) {
         // payload === { item: {...}, action: 1 - add (2 - remove, 3 - change, amount: 1/-1 }
         if(!payload.action) {
            let find = state.basket.find(el => el.productId == payload.item.productId );
            payload.action = find ? 3 : 1;
            payload.item = find ? find : Object.assign({}, payload.item, {amount:1});
            payload.amount = 1;

         }
         switch (payload.action) {
             case 1: {
                 commit('basket_add', payload.item)
                 break;
             }
             case 2: {
                 commit('basket_remove',payload.item)
                 break;
             }
             case 3: {
                 commit('basket_change', { item: payload.item, amount: payload.amount})
                 break;
             }
         }
     }
  },
  getters: {
      basket_getter: state => state.basket
  }
})
