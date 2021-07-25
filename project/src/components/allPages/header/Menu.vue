<template>
  <div class="topNav">
    <nav>
      <router-link :to="{name: 'Home'}" class="topNav__active">Home</router-link>
      <router-link :to="{name: 'ShoppingCart'}">Man</router-link>
      <router-link :to="{name: 'SinglePage'}">Women</router-link>
      <router-link :to="{name: 'Product'}">Kids</router-link>
      <router-link :to="{name: 'Checkout'}">Accoseriese</router-link>
      <a href="#">Featured</a>
      <a href="#">Hot Deals</a>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>