<template>
  <div>
    <template v-if="type == 'catalog'">

      <div class="featuredBuyItem"

      >

        <div class="addToCart">
          <div class="coverAddtoCart">
            <div>
              <button class="backColor newBackColor"
                      name="add"
                      @click="add(item)"
              >
                <img class="cartBuy" src="@/assets/images/carsBuy.png" alt="cartBuy" />
                &nbsp ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div><img :src="item.productImg" alt="item"/></div>
        <div class="name_buy_item">{{ item.productName }}</div>
        <div class="price_item">$ {{ item.productPrice }} </div>

      </div>


    </template>

    <template v-if="type == 'basket'">

      <div class="cartBuyItems" id="basket-items" :key="item.productId">

        <div class="cartFlex" >
          <div>
            <img :src="item.productImg" alt="buy4">
          </div>

          <div class="textCenterCart">
            <div class="textByCart">{{ item.productName }}</div>
            <div>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="priceCart">
              {{ item.amount }} x <span>{{ item.productPrice }}</span> = {{ item.amount * item.productPrice }}
            </div>
          </div>
          <div class="cartCircle">
                          <!--    1й способ удаления:        -->
            <!--            <a-->
            <!--                @click.prevent="$parent.remove(item.productId)"-->
            <!--                href="#"-->
            <!--                class="far fa-times-circle faCart"-->
            <!--            >-->

                          <!--     2й способ удаления:        -->
<!--            @click.prevent="$emit('del', item.productId)"-->
            <a
                @click.prevent="$emit('del', item.productId)"
                href="#"
                class="far fa-times-circle faCart"
            >
            </a>
          </div>
        </div>
        <div class="horizontal cartHorizontal"></div>

      </div>


    </template>

  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: "catalog"
    },
    item: {
      type: Object, default:() => ({}) // Если надо писать default некий массив, то надо писать метод, по умолчанию item пустой объект
    },
  },
  methods: {
    add(item) {
      // this.$parent.$parent.$refs.basket.add(item);
      this.$store.dispatch('changeBasketItems', { item, action: undefined });  // dispatch - вызов
    }
  }
}
</script>

<style scoped>

</style>