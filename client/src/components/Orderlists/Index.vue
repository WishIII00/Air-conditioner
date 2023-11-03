<template>
  <div>
    <b-container class="bv-example-row">
      <div class="" >
        <b-row class="text-left">
        <b-col></b-col>
          <b-col cols="10" class="bg1">
            <center>
            <h1><b>Order List</b></h1>
            <h5>จำนวนรายการสั่งซื้อ {{ orderlists.length }} รายการ</h5></center>
            <hr>
            <div class="d-grid gap-2 col-6 mx-auto">
               <center> <b-button variant="btn btn-success" v-on:click="navigateTo('/orderlist/create')"><i class="fa fa-id-card-o">  การสั่งซื่อ</i>  </b-button>  </center>
            </div>

            <br>
            <div class="box1" v-for="orderlist in orderlists" v-bind:key="orderlist.id">
              <h4><b><p>รายการที่ : {{ orderlist.id }}</p></b></h4>
              
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ชื่อ - นามสกุล :</b> {{ orderlist.firstname }}  {{ orderlist.lastname }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>เบอร์โทรศัพท์ :</b> {{ orderlist.tel }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>แบนด์เครื่องปรับอากาศ</b> : {{ orderlist.brand }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>" รุ่น " เครื่องปรับอากาศ :</b> {{ orderlist.model }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ราคาเครื่องปรับอากาศ :</b> {{ orderlist.price }} </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>วันที่สั่งซื้อ :</b> {{ orderlist.dates }}</p>
      
              <hr>
              <p>
                <b-button variant="primary" v-on:click="navigateTo('orderlist/'+orderlist.id)"><i class="fa fa-search">ตรวจสอบข้อมูล</i> </b-button>
                <b-button variant="warning" v-on:click="navigateTo('/orderlist/edit/' + orderlist.id)"><i class="fa fa-check-square-o">แก้ไขการสั่งซื้อ</i></b-button>
                <b-button variant="danger" v-on:click="deleteOrderlist(orderlist)"> <i class="fa fa-times">ยกเลิกการสั่งซื้อ</i></b-button>
               
              </p>
            </div>
    
          </b-col>
        <b-col></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import OrderlistsService from "@/services/OrderlistsService";
export default {
  data() {
    return {
      orderlists: [],
    };
  },
  async created() {
    this.orderlists = (await OrderlistsService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteOrderlist(orderlist) {
      let result = confirm("ต้องการยกเลิกการสั่งซื้อนี้ ?");
      if (result) {
        try {
          await OrderlistsService.delete(orderlist);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.orderlists = (await OrderlistsService.index()).data;
    },
  },
};
</script>
<style scoped>

</style>