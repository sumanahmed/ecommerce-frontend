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
                <li class="breadcrumb-item active">Cart</li>
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
                    <div class="col-xl-12 col-md-12 col-sm-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Action</th>
                                    <th>Name</th>
                                    <th>Unit Price</th>
                                    <th>Unit Quantity</th>
                                    <th style="text-align:right">Total Quantity</th>
                                    <th style="text-align:right">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in cart.items" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td><span style="font-size:24px;color:red" title="Remove" @click="removeItem(item.id)">X</span></td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td>
                                        <i class="fa fa-plus curson-pointer" @click="incrementItem(item.id)"></i> &nbsp;
                                        <input class="qnty" type="text" v-model="item.quantity" disabled/> &nbsp;
                                        <i class="fa fa-minus curson-pointer" @click="decrementItem(item.id, item.quantity)"></i>
                                    </td>
                                    <td style="text-align:right">{{ item.totalQty}}</td>
                                    <td style="text-align:right">{{ item.totalPrice}}</td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-center">Grand Total </td>
                                    <td style="text-align:right"><b>{{ grandTotalQuantity > 0 ? grandTotalQuantity : '' }}</b></td>
                                    <td style="text-align:right"><b>{{ grandTotalPrice > 0 ? grandTotalPrice : '' }}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 text-right">
                        <b-button href="#" variant="success" @click="checkout">Checkout</b-button>
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

  export default {
    name:'Home',
    data() {
      return {
        loader: false,
        grandTotalPrice: 0,
        grandTotalQuantity: 0
      }
    },
    created () {
        this.checkGrandTotal()
    },
    computed: {
      cart: function () {
        return this.$store.state.cart
      }
    },
    methods: {
      checkGrandTotal () {
        let gTotalQnty = 0
        let gTotalPrice = 0
        this.cart.items.map(el => {
            gTotalPrice += el.totalPrice
            gTotalQnty += el.totalQty
        })
        this.grandTotalPrice = gTotalPrice
        this.grandTotalQuantity = gTotalQnty
      },
      incrementItem (itemId) {
        this.$store.dispatch('incrementItem', itemId)
        this.checkGrandTotal()
      },
      decrementItem (itemId, currentQnty) {
        if (currentQnty > 1) {
            this.$store.dispatch('decrementItem', itemId)
            this.checkGrandTotal()
        } else {
            alert("Quantity cant not be less than 1");
        }
      },
      removeItem (itemId) {
        this.$store.dispatch('removeItem', itemId)
        this.checkGrandTotal()
      },
      checkout () {
        this.$store.dispatch('checkout', '')
        this.checkGrandTotal()
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .qnty {
    width: 30px;
    text-align: center;
  }
</style>