<template>
  <div>
  <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>
         <b-col cols="10" class="bg3">
          <center>
            <h1><b>รายการเครื่องปรับอากาศ</b></h1>
            <h5>รายการเครื่องปรับอากาศ ที่ {{ air.id }}</h5>
          </center>
          <hr>
          <form class="box3" v-on:submit.prevent="editAir">
            <p><b><h5><strong> แบนค์เครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_brand" /></p>
            <p><b><h5><strong> ชื่อเครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_name" /></p>
            <p><b><h5><strong> BTU เครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_btu" /></p>
            <p><b><h5><strong> ระบบเครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_system" /></p>
            <p><b><h5><strong> ขนาดเครื่องปรับอากาศ </strong></h5></b> <input type="text" class="form-control" v-model="air.air_size" /></p>
            <p><b><h5><strong> ราคาเครื่องปรับอากาศ  </strong></h5></b> <input type="text" class="form-control" v-model="air.air_price" /></p>
            

      <hr>
      <p>
        <b-button variant="warning"  type="submit"><i class="fa fa-check-square-o">แก้ไขรายการ</i></b-button>
        <b-button variant="secondary" v-on:click="navigateTo('/airs')"><i class="fa fa-arrow-circle-left">ย้อนกลับ</i></b-button>
        <br>
      </p>
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
      air_size:"",
      air_price:"",
      category: "",
      status: ""
      },
      config: {
        height: 300,
      },
    };
  },
  methods: {
    async editAir() {
      try {
        await AirsService.put(this.air);
        this.$router.push({
          name: "airs",
        });
      } catch (err) {
        console.log(err);
      }
    },

    onBlur (editor) {
          console.log(editor);
       },
          onFocus (editor) {
            console.log(editor);
          },
    
    navigateTo(route) {
      console.log(route);
      this.$router.push(route);
    },
    
  
  },

  async created() {
    try {
      let airId = this.$route.params.airId;
      this.air = (await AirsService.show(airId)).data;


    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
    .dropbox {
      outline: 2px dashed gray;
      outline-offset: -10px;
      background: #f5fdaa;
      color: dimgray;
      padding: 10px 10px;
      min-height: 200px; 
      position: relative;
      cursor: pointer;
    }

    .input-file {
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }

    .dropbox:hover {
        background: #fceebe;
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 0;
    }

    ul.pictures {
      list-style: none;
      padding: 0;
      margin: 0;
      float: left;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    ul.pictures li {
      float: left;
    }
    ul.pictures li img {
      max-width: 180px;
      margin-right: 20px;
    }
    .clearfix {
      clear: both;
    }
   
    .thumbnail-pic img{
      width: 200px;
    }
    input {
      width: 450px;
}

</style>