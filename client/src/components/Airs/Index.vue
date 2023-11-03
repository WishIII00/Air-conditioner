<template>
  <div>
    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>
         <b-col cols="10" class="bg3">
          <center>
            <h1><b>รายการเครื่องปรับอากาศ</b></h1>
            <h5>จำนวนรายการเครื่องปรับอากาศ {{ airs.length }} รายการ</h5>
            <hr>
          </center>
          <div class="d-grid gap-2 col-6 mx-auto">
            <center><b-button variant="success" v-on:click="navigateTo('/air/create')"><i class='fa fa-calendar-check-o'>สร้างรายการ</i></b-button></center>
          </div>

          <br>


          <div  class="box3" v-for="air in airs" v-bind:key="air.id">
            <h4><b><p>รายการเครื่องปรับอากาศ : {{ air.id }}</p></b></h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>แบนค์เครื่องปรับอากาศ : </b>{{ air.air_brand }}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>" รุ่น " เครื่องปรับอากาศ : </b>{{ air.air_name }}</p>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTU เครื่องปรับอากาศ  : </b>{{ air.air_btu }}</p>
              <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ระบบเครื่องปรับอากาศ : </b>{{ air.air_system }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ขนาดเครื่องปรับอากาศ : </b>{{ air.air_size }}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ราคาเครื่องปรับอากาศ : </b>{{ air.air_price }}</p>


            <hr>
            <p>
              <b-button variant="primary" v-on:click="navigateTo('air/'+air.id)"> <i class="fa fa-search">ดูรายละเอียด</i></b-button>
              <b-button variant="warning" v-on:click="navigateTo('/air/edit/' +air.id)"><i class="fa fa-check-square-o">แก้ไขรายการ</i>  </b-button>
              <b-button variant="danger" v-on:click="deleteAir(air)"><i class="fa fa-times">ลบรายการนี้</i>  </b-button>
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
         airs: [],
    };
  },
  async created() {
    this.airs = (await AirsService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteAir(air) {
      let result = confirm("คุณแน่ใจนะ ที่จะลบรายการนี้?");
      if (result) {
        try {
          await AirsService.delete(air);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.airs = (await AirsService.index()).data;
    },
  },
};
</script>
<style scoped>
</style>