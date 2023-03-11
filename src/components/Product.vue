<template>
    <div class="content-wrapper">
      <!-- <div v-if="loader" class="page_loader"></div> -->
      <!-- Content Header (Page header) -->
      <div class="content-header" style="font-size:16px;">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-12 text-right">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">products</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid dashboard-card">
          <div class="card">
            <div class="card-body">
              <b-overlay :show="loader">
                <div class="row">
                  <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12" v-for="(item, index) in products" :key="index">
                    <b-card
                      :title=" item.name"
                      :img-src=" item.image ? item.image : './images/no-image.png'"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2"
                    >
                      <b-card-text>
                        {{ item.description }}
                      </b-card-text>
                      <b-card-text>
                         <span class="text-right">Tk. {{ item.price }}</span> 
                      </b-card-text>
                      <b-button href="#" variant="primary" @click="addToCart(item)">Add To Cart</b-button>
                    </b-card>
                  </div>
                </div>
              </b-overlay>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>
      <!-- /.content -->
  </div>
</template>
<script>
  import config from '@/config'

  export default {
    name:'Home',
    data() {
      return {
        loader: false,
        products: []
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      async loadData () {
        this.loader = true
        const response = await config.getData('/products')
        this.loader = false
        if (response.success) {
          this.products = response.data  
        } else {
          this.products = []
        }    
      },
      addToCart (item) {
        this.$store.dispatch('addToCart', item)
      }
    }
  }
</script>
<style scoped>
  article img {
    border: 2px solid #ddd;
    height: 250px;
  }
</style>