<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
        <b-col cols="10" class="bg1">
          <center>
            <h1><b>Order List</b></h1>
            <h5>ข็อมูลการสั่งซื้อเครื่องปรับอากาศ</h5></center>
          <hr/>
          <form class="box1" v-on:submit.prevent="createOrderlist">
            <p> ชื่อ : <input type="text" class="form-control" v-model="orderlist.firstname" /> </p>
            <p> นามสกุล : <input type="text" class="form-control" v-model="orderlist.lastname" /> </p>
            <p> เบอร์โทรศัพท์ : <input type="tel" class="form-control" required v-model="orderlist.tel" /></p>
            <p> แบนด์เครื่องปรับอากาศ :
              <select required class="form-control"  v-model="orderlist.brand">
                      <option selected> MITSUBISHI ELECTRIC </option>
                      <option>HAIER</option>
                      <option>TCL</option>
                      <option>HITACHI</option>
                      <option>SAMSUNG</option>
                      <option> LG </option>
              </select>
            </p>
            
            <p> " รุ่น " เครื่องปรับอากาศ : <input type="text" class="form-control" required v-model=" orderlist.model" /></p>
            <p> ราคาเครื่องปรับอากาศ : <input type="number" class="form-control" required v-model="orderlist.price" /></p>
            <p> วันที่สั่งซื้อ : <input type="date" required class="form-control" v-model="orderlist.dates" /></p>
            
            <hr>
            <p>
              <b-button variant="success" type="submit"><i class="fa fa-check-square-o">ยืนยัน</i></b-button
              >
              <b-button variant="danger" type="reset"><i class="fa fa-refresh"> รีเซ็ต</i></b-button>
              <b-button variant="secondary" v-on:click="navigateTo('/bloghotels')"><i class="fa fa-arrow-left">ย้อนกลับ</i></b-button>
            </p>
          </form>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
import OrderlistsService from "@/services/OrderlistsService";


export default {
  data() {
    return {
      
      orderlist: {
        firstname: "",
        lastname: "",
        brand: "",
        model: "",
        price: "",
        tel: "",
        dates: "",
        category: "",
        status: ""
      },
      config: {
        height: 300
      }
    };
  },
  methods: {
    async createOrderlist() {
      try {
        await OrderlistsService.post(this.orderlist);
        this.$router.push({
          name: "orderlists"
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
.dropbox {
  outline: 2px dashed gray;
  outline-offset: -10px;
  background: #fec3df;
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

.thumbnail-pic img {
  width: 200px;
}

input,select {
      width: 450px;
    }
</style>
