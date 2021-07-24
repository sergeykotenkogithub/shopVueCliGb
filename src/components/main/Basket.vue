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
            $ <span id="basket-sum">{{ price }}</span>
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
      price: 0 // временно
    }
  },
  methods: {
    showBasket() {
      this.show = !this.show
    },
  },
  async mounted() {
    try {
      this.items = (await get(this.url)).content;
    }
    catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>