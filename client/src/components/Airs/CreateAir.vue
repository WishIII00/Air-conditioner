<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
        <b-col cols="10" class="bg3">
          <center>
            <h1><b>รายการเครื่องปรับอากาศ</b></h1>
            <h5>เพิ่มรายการเครื่องปรับอากาศ</h5></center>
          <hr />
          <form class="box3" v-on:submit.prevent="createAir">
            <p><b><h5><strong> แบนค์เครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_brand" /></p>
            <p><b><h5><strong> " รุ่น " เครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_name" /></p>
            <p><b><h5><strong> BTU เครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_btu" /></p>
            <p><b><h5><strong> ระบบเครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_system" /></p>
            <p><b><h5><strong> ขนาดเครื่องปรับอากาศ </strong></h5></b> <input type="text" class="form-control" v-model="air.air_size" /></p>
            <p><b><h5><strong> ราคาเครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_price" /></p>
            
            <p><center>
            <b-button variant="success" type="submit"><i class="fa fa-check-square-o"> สร้างรายการ </i></b-button>
            <b-button variant="secondary" v-on:click="navigateTo('/airs')"><i class="fa fa-arrow-circle-o-left">ย้อนกลับ</i> </b-button>
            </center></p>
          </form>
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
      
      air: {
      air_brand: "",
      air_name: "",
      air_btu: "",
      air_system: "",
      air_size: "",
      air_price:"",
      category: "",
      status: ""
        
      }
    };
  },
  
  methods: {
    async createAir() {
      try {
        await AirsService.post(this.air);
        this.$router.push({
          name: "airs"
        });
      } catch (err) {
        console.log(err);
      }
    },
    onBlur(editor) {
      console.log(editor);
    },
    onfocus(editor) {
      console.log(editor);
    },
    
    navigateTo(route) {
      console.log(route);
      this.$router.push(route);
    },
    
  },
};
</script>
<style scoped>

input {
      width: 450px;
}
</style>
