<template>

  <div class="feature_block" id="catalog">
      <Item
          v-for="el of items"
          :key="el.productId"
          :item="el"
      />
  </div>


</template>

<script>

import { get } from '@/core/requests'
import Item from './Item.vue'

export default {
  components: { Item },
  data() {
    return {
      items: [],
      // url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/catalog.json"
      url: '/api/catalog'
    }
  },
  async mounted() {
    try {
      this.items = await get(this.url);
    }
    catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>