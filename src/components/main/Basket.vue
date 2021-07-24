<template>
  <div id="basket">
    <div class="img_Cart_header" id="clickCart" >
      <div class="cartScale" @click="showBasket">
        <img
            class="cart"
            src="@/assets/images/cars.jpg"
            alt="cars"
            id="basket-btn"
        /><span class="cartNumber">{{ cartQuantity }} </span>
      </div>

      <div class="buyCart" id="basket-inner" v-show="show">

        <!--     Тут вставляется блок с добавленными товарами           -->
        <Item
            v-for="item of items"
            type="basket"
            :item="item"
            @del="remove"
            :key="item.productId"
        />
        <!--   В  @del id сам передасться так как это обработка событий, в обработку событий передаётся аргумент по умолчанию    -->

        <div class="priceBuyCart">
          <div class="priceTextTotal">TOTAL:</div>
          <p class="priceTextTotal">
            $ <span id="basket-sum">{{ cartTotal }}</span>
          </p>
        </div>
        <button>CHECKOUT</button>
        <button>GO TO CART</button>
      </div>

    </div>
  </div>


</template>

<script>

import { get } from '@/core/requests'
import Item from "./Item.vue";
import { mapGetters } from 'vuex';

export default {
  components: { Item },
  data() {
    return {
      url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/basket.json",
      show: false,
    }
  },
  methods: {
    showBasket() {
      this.show = !this.show
    },

    add(item) {
      let find = this.items.find(el => item.productId == el.productId);

      if(find) {
        this.$store.dispatch('changeBasketItems', {item: find, action: 3, amount: 1 })
        // find.amount++
      } else {
        let newItem = Object.assign({}, item, {amount: 1});
        this.$store.dispatch('changeBasketItems', {item: newItem, action: 1})
        // this.items.push(Object.assign({}, item, {amount: 1}));
      }
    },


    remove(id) {
      let find = this.items.find(el => el.productId == id);

      if(find.amount > 1) {
        this.$store.dispatch('changeBasketItems', {item: find, action: 3, amount: -1 })
        // find.amount--;
      } else {
        this.$store.dispatch('changeBasketItems', {item: find, action: 2})
        // this.items.splice(this.items.indexOf(find), 1) // 1 - значит 1 элемент
      }
    }
  },
  async mounted() {
    try {
      this.$store.dispatch('loadBasket', this.url)  // могу обращаться так как в main.js прописвн store
    }
    catch (err) {
      console.log(err)
    }
  },

  computed: {
    ...mapGetters({ items: 'basket_getter' }),
    cartTotal() {
      let sum = 0
      this.items.forEach(item => {
        sum += item.amount * item.productPrice;
      })
      return sum
    },
    cartQuantity() {
      let sum = 0
      this.items.forEach(item => {
        sum += item.amount;
      })
      return sum
    }
  }
}
</script>

<style scoped>

</style>