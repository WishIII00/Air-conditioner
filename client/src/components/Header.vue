<template>
    <div>
        <div class="sidebar">
            <center><img src="https://www.th.sharp/sites/default/files/uploads/2021-06/Picture2.jpg" height="100" width="100">
            <h1 class="text-center"><b>Air conditioner</b></h1></center>
            <a><router-link :to="{name: 'login'}"><i class="fa fa-user" aria-hidden="true"></i><b>พนักงานเครื่องปรับอากาศ</b></router-link></a>
            <a><router-link :to="{name: 'airs'}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><b>รายการเครื่องปรับอากาศ</b></router-link></a>
            <a><router-link :to="{name: 'orderlists'}"><i class="fa fa-calendar-check-o" aria-hidden="true"></i><b>รายการลูกค้า</b></router-link></a>
            <a><a v-on:click.prevent="logout" v-on:click="navigateTo('/')"><i class="fa fa-sign-out" aria-hidden="true"></i><b> ออกจากระบบ</b></a></a>
        </div>
    </div>
</template>

<script>
import AuthenService from "@/services/AuthenService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);

        this.$router.push({
          name: "users"
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = "";
        this.password = "";
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);

      this.$router.push({
        name: "login",
      });
    },
  }
};
</script>

<style scoped>

img{
	width: 100%;
}


.sidebar {
  margin: 0;
  padding: 0;
  width: 230px;
  background-color: #fefcfcf0;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 17px;
  border-radius: 0px 0px 0px 0px;

}

.sidebar center {
  font-size: 70px;
  display: block;
  color: #f6f6f6;
  padding: 9px;
  text-decoration: none;
  background-color: #13130f;
}

.sidebar center h1 {
  font-size: 30px;
}


.sidebar a {
  display: block;
  color: black;
  padding: 9px;
  text-decoration: none;
  text-align: center;
}


.sidebar a.active {
  background-color: #f7f7f7 ;
  color: rgb(10, 10, 10);
}


.sidebar a:hover:not(.active) {
  background-color: #d5e0f3 ;
  border-radius: 10px 10px 10px 10px;
  color: #030303;
}


div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}


@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}


@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.sidebar a.router-link-active{
    color: black;
    background-color: #ffffff ;
     border-radius: 5px 5px 5px 5px;

}

</style>