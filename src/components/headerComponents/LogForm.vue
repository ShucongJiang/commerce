<template>
  <div class="logForm">
    <div class="login">
      <div class="login-info">
        <label for="user">用户名</label>
        <input type="text" id="user" placeholder="请输入用户名" v-model="userName">
        <span class="errorInfo">{{userNameError.errorInfo}}</span>
      </div>

      <div class="login-info">
        <label for="password">密码</label>
        <input type="password" id="password" placeholder="请输入密码" v-model="passWord">
        <span class="errorInfo">{{passWordError.errorInfo}}</span>
      </div>

      <button @click="login">登录</button>
      <p class="errorText">{{errorText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      errorText: ""
    };
  },
  computed: {
    userNameError() {
      let reg = /^[a-zA-Z0-9]{4,12}$/;
      let errorInfo, status;
      if (!reg.test(this.name)) {
        status = false;
        errorInfo = "用户名长度应为4-6位，且只能是数字和字母";
      } else {
        status = true;
        errorInfo = '';
      }

      if (!this.userNameFlag) {
        errorInfo = '';
        this.userNameFlag = true;
      }

      return {
        status,
        errorInfo
      };
    },

    passWordError() {
      let reg = /^\w{6,12}$/;
      let errorInfo, status;
      if (!reg.test(this.passWord)) {
        status = false;
        errorInfo = "密码长度应为6-12位";
      } else {
        status = true;
        errorInfo = '';
      }

      if (!this.passWordFlag) {
        errorInfo = '';
        this.passWordFlag = true;
      }

      return {
        status,
        errorInfo
      };
    }
  },

  methods: {
    login() {
      if (!this.userNameError.status || !this.passWordError.status) {
        this.errorText = "请重新检查你的输入";
      } else {
        let regInformation = JSON.parse(localStorage.getItem('regInformation'));
        // console.log(regInformation)
        // [{"1111111111":"1"},{"12222222222":"11"}]

        let keys = [];
        regInformation.forEach(element => {
            console.log(element);
            Object.keys(element).forEach(key=>{
                console.log(key);
                keys.push(key)
            })
        });

        if (keys.indexOf(this.userName.toString()) == -1) {
            this.errorText = "用户未注册";
        } else {
            this.errorText = "";
            this.$emit("has-login", this.userName);
        }

      }
    }
  }
};
</script>

<style scoped>
.login-info {
  margin: 25px 0;
}

.login-info label {
  display: inline-block;
  text-align: right;
  width: 60px;
  color: #36adde;
}

.login-info input {
  width: 200px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 20px;
}

button {
  color: #fff;
  width: 70px;
  height: 30px;
  border: 1px solid #69b5ff;
  border-radius: 7px;
  background-color: #69b5ff;
  font-size: 14px;
  letter-spacing: 4px;
  margin-left: 90px;
  cursor: pointer;
}

.login-info .errorInfo {
  font-size: 14px;
  color: red;
}

.errorText {
  font-size: 14px;
  color: red;
  margin-left: 60px;
}
</style>

