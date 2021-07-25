<template>
<div>
  <div class="shipping_form_product">
    <div class="container">
      <div class="shipping_adress">
        <h2>01.&ensp;Shipping Adress</h2>
        <div class="shipping_adress_block">
          <form class="form_shipping_adress_1" action="#">
            <div>
              <h3>Check as a guest or register</h3>
              <h4>Register with us for future convenience</h4>
            </div>
            <div>
              <p>
                <input
                    class="form-check-input"
                    type="radio"
                    name="blankRadio"
                    id="blankRadio1"
                    value="option1"
                    aria-label="..."
                />
                <span>checkout as guest</span>
              </p>
              <p>
                <input
                    class="form-check-input"
                    type="radio"
                    name="blankRadio"
                    value="option1"
                    aria-label="..."
                />
                <span>register</span>
              </p>
            </div>
            <div>
              <h3>register and save time!</h3>
              <h4>Register with us for future convenience</h4>
            </div>
            <div>
              <h4>
                <i class="fas fa-angle-double-right"></i> Fast and easy
                checkout
              </h4>
              <h4>
                <i class="fas fa-angle-double-right"></i> Easy access to your
                order history and status
              </h4>
            </div>
            <button class="btn_shipping_product">Continue</button>
          </form>

          <div class="already_registed">
            <form class="form_shipping_adress_2" action="#">
              <h2>Already registed?</h2>
              <h4>Please log in below</h4>
              <p>
                EMAIL ADDRESS<span>*</span><br /><input
                  type="email"
                  name="login"
              />
              </p>
              <p>
                PASSWORD<span>*</span><br /><input
                  type="password"
                  name="pass"
              />
              </p>
              <h3>* Required Fileds</h3>
              <button class="btn_shipping_product">Log in</button>
            </form>
          </div>
        </div>
      </div>
      <div class="billing_order">
        <div class="billing">02. BILLING INFORMATION</div>
        <div class="billing">03. SHIPPING INFORMATION</div>
        <div class="billing">04. SHIPPING METHOD</div>
        <div class="billing">05. PAYMENT METHOD</div>
        <div class="billing">06. ORDER REVIEW</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Checkout"
}
</script>

<style scoped>

</style>