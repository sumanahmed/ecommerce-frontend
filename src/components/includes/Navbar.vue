<template>
  <div>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
      </ul>
      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto"> 
        <li class="nav-item dropdown">
          <router-link to="/cart" class="nav-link" data-toggle="dropdown">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span class="badge badge-danger navbar-badge">{{ totalItem > 0 ? totalItem : '' }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name:'Navbar',   
  data () {
    return {
      loader: false,
    }
  },
  computed: {
    totalItem: function () {
      return this.$store.state.cart.items.length
    }
  }
}
</script>