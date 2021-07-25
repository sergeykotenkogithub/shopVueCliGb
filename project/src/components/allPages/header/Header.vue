<template>

  <header>
    <div class="header">

      <div class="container">
        <a class="noDecor" href="index.html">
          <div class="logo">BRAN<span>D</span></div>
        </a>
        <form class="topSearch" action="#">
          <button class="searchBrowse">
            Browse
            <i class="fas fa-caret-down"></i>
          </button>
          <input type="text" placeholder="Search for Item..." />
          <button class="searchButton"><i class="fas fa-search"></i></button>
        </form>

        <!-- Подгрузка с Js корзины  -->
        <Basket ref="basket"/>

        <!-- Мой аккаунт кнопка -->
        <button class="myAccount">
          My Account
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
  </header>

</template>

<script>

import Basket from "@/components/main/Basket";
export default {
  components: { Basket },
  name: "Header"
}

</script>

<style scoped>

</style>