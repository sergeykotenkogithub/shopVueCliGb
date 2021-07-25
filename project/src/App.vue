<template>
  <div id="app">
    <Header/>
    <Menu/>
    <router-view/>
    <Feedback/>
    <AboutCompany/>
    <Footer/>
  </div>
</template>

<!-- Тут собираются все шаблоны которые будут на всех страницах-->

<script>
import Footer from "./components/allPages/footer/Footer";
import AboutCompany from "./components/allPages/footer/AboutCompany";
import Feedback from "./components/allPages/footer/Feedback";
import Header from "./components/allPages/header/Header";
import Menu from "./components/allPages/header/Menu";
export default {
  components: {
    Menu,
    Header,
    Feedback,
    AboutCompany,
    Footer
  }
}
</script>
<style lang="scss"></style>