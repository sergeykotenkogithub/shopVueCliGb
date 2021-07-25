<template>
  <div id="app">
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
export default {
  components: {
    Feedback,
    AboutCompany,
    Footer
  }
}
</script>
<style lang="scss"></style>