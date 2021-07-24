<template>
  <div>
  <header>
    <!-- Симантический тег! -->
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
  <div class="topNav">
    <nav>
      <!-- Симантический тег навигация -->
      <a href="index.html"> Home </a>
<!--      <a href="shoping_cart.html"> Man </a>-->
      <a href="/about"> Man </a>
      <a href="single_page.html">Women</a>
      <a href="product.html">Kids</a>
      <a href="checkout.html">Accoseriese</a>
      <a href="#">Featured</a>
      <a href="#">Hot Deals</a>
    </nav>
  </div>

  <!-- Заканчивается меню -->
  <!-- 2й блок -->
  <div class="promo">
    <div class="container">
      <div class="promoWrap">
        <div class="promoTopText">THE BRAND</div>
        <div class="promoBottomText">OF LUXERIOUS <span>FASHION</span></div>
      </div>
    </div>
  </div>

  <div class="topOffer">
    <div class="container">
      <div class="hotDeal">
        <div class="offerLabel">
          HOT DEAL
          <div>FOR MEN</div>
        </div>
      </div>
      <div class="offer30">
        <div class="offerLabel">
          30% OFFER
          <div>WOMEN</div>
        </div>
      </div>
      <div class="luxirous">
        <div class="offerLabel">
          LUXIROUS & TRENDY
          <div>ACCESORIES</div>
        </div>
      </div>
      <div class="forKids">
        <div class="offerLabel">
          NEW ARRIVALS
          <div>FOR KIDS</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured -->
  <div class="featured">
    <div class="fetured-Items">Fetured Items</div>
    <div class="featured-text">
      Shop for items based on what we featured in this week
    </div>
  </div>

  <!-- Блок с 8ю картинками -->
  <div class="featured_buy">
    <div class="container">

      <Catalog />
      <!-- Тут вставляется catalog.js -->

    </div>
  </div>

  <!-- Блок с кнопкой All product -->

  <div class="allProduct">
    <button class="allProduct_click">Browse All Product &#10142;</button>
  </div>

  <!-- Блок offer 30% -->

  <div class="offer_for_women">
    <div class="container">
      <div class="offer_picture">
        30% <span>OFFER</span>
        <div>FOR WOMEN</div>
      </div>

      <div class="advantages">
        <div class="advantages_container">
          <div class="advantages_text">
            <img
                class="advantages_picture"
                src="@/assets/images/car.svg"
                alt="car"
            />
            <h2>Free Delivery</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>

          <div class="advantages_text">
            <img src="@/assets/images/percent.svg" alt="percent" />
            <h2>Sales & discounts</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>

          <div class="advantages_text">
            <img src="@/assets/images/crown.svg" alt="crown" />
            <h2>Quality assurance</h2>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Блок с subscribe и отзывом -->
  <div class="feedback">
    <div class="container">
      <div class="subscribe">
        <div class="sub_pictures">
          <img src="@/assets/images/face.png" alt="face" />
        </div>
        <div class="feedback_text">
          <p class="about_text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
            pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
            pretium”
          </p>

          <div class="name_about">
            <h3>Bin Burhan</h3>
            <p>Dhaka, Bd</p>
          </div>
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="longLine"></div>

      <div class="promotion">
        <div class="promotion_text">
          <h3>Subscribe</h3>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
        </div>
        <div class="click_subscribe">
          <form class="subcskribe_form" action="#">
            <input
                class="subcskribe_text"
                type="email"
                placeholder="Enter Your Email"
                name="emailSubskribe"
                pattern="^([A-Za-z0-9\.-]+)(@)([a-z0-9-]+)(\.)([a-z0-9]{2,})+$"
            />
            <button type="submit" class="subcskribe_button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="about_brand">
    <div class="container">
      <div class="brand_text">
        <a class="noDecor" href="index.html">
          <div class="logo">BRAN<span>D</span></div>
        </a>
        <p>
          Objectively transition extensive data rather than cross functional
          solutions. Monotonectally syndicate multidisciplinary materials
          before go forward benefits. Intrinsicly syndicate an expanded array
          of processes and cross-unit partnerships.
        </p>

        <p>
          Efficiently plagiarize 24/365 action items and focused
          infomediaries. Distinctively seize superior initiatives for wireless
          technologies. Dynamically optimize.
        </p>

      </div>

      <div class="company">
        <h2>COMPANY</h2>
        <div class="about_company">
          <a href="#"> Home </a>
          <a href="#"> Shop</a>
          <a href="#"> About</a>
          <a href="#"> How It Works</a>
          <a href="#"> Contact</a>
        </div>
      </div>

      <div class="company">
        <h2>INFORMATION</h2>
        <div class="about_company">
          <a href="#">Tearms & Condition</a>
          <a href="#"> Privacy Policy</a>
          <a href="#"> How to Buy </a>
          <a href="#"> How to Sell </a>
          <a href="#"> Promotion </a>
        </div>
      </div>

      <div class="company">
        <h2>SHOP CATEGORY</h2>
        <div class="about_company">
          <a href="#"> Home </a>
          <a href="#"> Shop</a>
          <a href="#"> About</a>
          <a href="#"> How It Works</a>
          <a href="#"> Contact</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <footer>
      <!-- Симантический тег -->
      <div class="container">
        <p class="all_right">&#169; 2017 Brand All Rights Reserved.</p>
        <div class="social">
          <a href="#"> <i class="fab fa-facebook-f"></i> </a>
          <a href="#"> <i class="fab fa-twitter"></i> </a>
          <a href="#"> <i class="fab fa-linkedin-in"></i> </a>
          <a href="#"> <i class="fab fa-pinterest-p"></i> </a>
          <a href="#"> <i class="fab fa-google-plus-g"></i> </a>
        </div>
      </div>
    </footer>
  </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Catalog from "@/components/main/Catalog";
import Basket from "@/components/main/Basket";

export default {
  name: 'Home',
  components: {Basket, Catalog },
  data() {
    return {
      basket: {
        items: [],
        url: "https://raw.githubusercontent.com/sergeykotenkogithub/imageProject/main/json/basket.json",
      },
    }
  },
}
</script>
