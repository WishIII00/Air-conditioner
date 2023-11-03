<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
          <b-col cols="10" class="bg3">
            <center><h2><b><p>รายละเอียดของรายการเครื่องปรับอากาศ</p></b></h2></center>
            <hr>
            <div class="box3">
              <h4><b><p>รายการเครื่องปรับอากาศ : {{ air.id }}</p></b></h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>แบนค์เครื่องปรับอากาศ : </b>{{ air.air_brand }}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>" รุ่น " เครื่องปรับอากาศ : </b>{{ air.air_name }}</p>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTU เครื่องปรับอากาศ  : </b>{{ air.air_btu }}</p>
              <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบเครื่องปรับอากาศ : </b>{{ air.air_system }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ขนาดเครื่องปรับอากาศ : </b>{{ air.air_size }}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ราคาเครื่องปรับอากาศ : </b>{{ air.air_price }}</p>
            <hr>
              
              <p>
              <b-button variant="warning" v-on:click="navigateTo('/air/edit/' + air.id)"><i class="fa fa-check-square-o">แก้ไขรายการ</i></b-button>
              <b-button variant="secondary" v-on:click="navigateTo('/airs')"><i class="fa fa-arrow-circle-left">ย้อนกลับ</i></b-button>
              </p>
            </div>
          </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AirsService from "@/services/AirsService";
export default {
  data() {
    return {
      air: null,
    };
  },
  async created() {
    try {
      let airId = this.$route.params.airId;
      this.air = (await AirsService.show(airId)).data;
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