<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/" class="brand-link">
        <div class="login-logo"><img :src="'./images/logo.jpg'"/></div>
      </router-link>
      <!-- Sidebar -->
      <div class="sidebar">
        <nav>
          <ul class="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">
                <i class="nav-icon fas fa-book"></i>
                <p>Product</p>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>
<script>
import config from '@/config'
export default {
  name:'Sidebar',
  data () {},
  methods: {
    logout(){ 
      this.$router.push('/auth/login');
      config.postData('/logout')
      localStorage.removeItem('accessToken') 
    }
  }
}
</script>