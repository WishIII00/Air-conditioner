<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
        <b-col cols="10" class="bg1">
        <center>
          <h1><b>Order List</b></h1>
          <h5>รายละเอียดการสั่งซื้อ {{ orderlist.id }} </h5><hr>
        </center>
        <div class="box1">
              <h4><b><p>รายการที่ : {{ orderlist.id }}</p></b></h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ชื่อ - นามสกุล</b> : {{ orderlist.firstname }}  {{ orderlist.lastname }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>เบอร์โทรศัพท์</b> : {{ orderlist.tel }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>แบนด์เครื่องปรับอากาศ</b> : {{ orderlist.brand }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>" รุ่น " เครื่องปรับอากาศ</b> : {{ orderlist.model }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ราคาเครื่องปรับอากาศ</b> : {{ orderlist.price }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>วันที่สั่งซื้อ</b> : {{ orderlist.dates }}</p>
              
              <hr>
            <p>
              <b-button variant="secondary" v-on:click="navigateTo('/orderlists')"><i class="fa fa-arrow-circle-left">ย้อนกลับ</i></b-button>
            </p>
        </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import OrderlistsService from "@/services/OrderlistsService";
export default {
  data() {
    return {
      orderlist: null,
    };
  },
  async created() {
    try {
      let orderlistId = this.$route.params.orderlistId;
      this.orderlist = (await OrderlistsService.show(orderlistId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>

</style>