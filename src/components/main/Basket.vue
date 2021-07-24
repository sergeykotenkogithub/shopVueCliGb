<template>
  <div id="basket">
    <div class="img_Cart_header" id="clickCart" >
      <div class="cartScale" @click="showBasket">
        <img
            class="cart"
            src="@/assets/images/cars.jpg"
            alt="cars"
            id="basket-btn"
        /><span class="cartNumber">2</span>
      </div>

      <div class="buyCart" id="basket-inner" v-show="show">

        <!--     Тут вставляется блок с добавленными товарами           -->
        <Item
            v-for="item of items"
            type="basket"
            :item="item"
            :key="item.productId"
        />

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


export default {
  components: { Item },
  data() {
    return {
      items: [],
      url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/basket.json",
      show: false,
      price: 0, // временно
      sum: 0
    }
  },
  methods: {
    showBasket() {
      this.show = !this.show
    },

    add(item) {
      let find = this.items.find(el => item.productId == el.productId);

      if(find) {
        find.amount++
      } else {
        this.items.push(Object.assign({}, item, {amount: 1}));
      }
    },


    remove(id) {
      let find = this.items.find(el => el.productId == id);

      if(find.amount > 1) {
        find.amount--;
      } else {
        this.items.splice(this.items.indexOf(find), 1) // 1 - значит 1 элемент
      }
    }
  },
  async mounted() {
    try {
      this.items = (await get(this.url)).content;
    }
    catch (err) {
      console.log(err)
    }
  },

  computed: {
    cartTotal() {
      let sum = 0
      this.items.forEach(item => {
        sum += item.amount * item.productPrice;
      })
      return sum
    }
  }
}
</script>

<style scoped>

</style>