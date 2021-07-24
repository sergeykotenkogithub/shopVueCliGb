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
import Item from './CatalogItem.Vue'

export default {
  components: { Item },
  data() {
    return {
      items: [],
      url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/catalog.json"
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