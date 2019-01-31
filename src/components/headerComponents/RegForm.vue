<template>
  <div class="regForm">
    <div class="reg-info">
      <label for="phone">请输入手机号</label>
      <input type="text" id="phone" placeholder="请输入手机号" v-model="phoneNumber">
      <span class="errorInfo">{{phoneNumberError.errorInfo}}</span>
    </div>
    <div class="reg-info">
      <label for="code">验证码</label>
      <input type="text" id="code" placeholder="请输入验证码" v-model="Code">
      <button class="code" @click="numberChange">{{verificationCode}}</button>
    </div>
    <button class="regBtn" @click="reg">注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      Code: "",
      verificationCode: "获取验证码",
      timer: null
    };
  },

  computed: {
    phoneNumberError() {
      let reg = /^1(\d{10})$/;
      let errorInfo, status;
      if (!reg.test(this.phoneNumber)) {
        status = false;
        errorInfo = "请输入正确的手机号码";
      } else {
        status = true;
        errorInfo = "";
      }

      if (!this.phoneNumberFlag) {
        errorInfo = "";
        this.phoneNumberFlag = true;
      }
      return {
        status,
        errorInfo
      };
    }
  },

  methods: {
    numberChange() {
      this.verificationCode = 60;
      this.setInter();
    },

    setInter() {
      var btns = document.getElementsByClassName("code");
      btns[0].disabled = true;
      this.timer = setInterval(() => {
        this.verificationCode--;
        if (this.verificationCode == 0) {
          this.verificationCode = "重新获取";
          clearInterval(this.timer);
          btns[0].disabled = false;
        }
      }, 1000);
    },

    appendLocal(key, obj) {
      if (obj == null) return;
      var temp,
        tempStr = "";

      try {
        if (localStorage.getItem(key) == null) throw new Error("空或undefined");

        temp = JSON.parse(localStorage.getItem(key));
      } catch (err) {
        // 当localStorage中没有对应key，或key对应内容为空、undefined，或parse出错时
        temp = [];
      }

      temp = temp.map(item => {
        console.log(JSON.stringify(item));
        return JSON.stringify(item);
      });
      // 去重
      if (temp.indexOf(JSON.stringify(obj)) === -1)
        temp.push(JSON.stringify(obj));

      temp.forEach((item, index, arr) => {
        arr.length === index + 1
          ? (tempStr += `${item}`)
          : (tempStr += `${item},`);
      });
      localStorage.setItem(key, `[${tempStr}]`);
      console.log(localStorage)
    },

    reg() {
      if (this.phoneNumber === "" || this.Code === "") {
        alert("您尚未注册，请填写手机号和验证码");
      } else {
        alert("您已经注册成功");
        this.$emit("has-reg");
      }

      /*采用本地存储localstorage存储注册数据*/
    //   let LStorage = window.localStorage;
      var regInformation = {};
      regInformation[this.phoneNumber] = this.Code;
      this.appendLocal("regInformation", regInformation);
    }
  }
};
</script>

<style scoped>
.reg-info {
  margin: 25px 0;
}

.reg-info label {
  display: inline-block;
  text-align: right;
  width: 100px;
  color: #36adde;
}

.reg-info input {
  width: 200px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-left: 20px;
  vertical-align: middle;
}

.reg-info .code {
  width: 90px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #69b5ff;
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
  /* line-height:30px; */
  vertical-align: middle;
  cursor: pointer;
}

.regForm .regBtn {
  color: #fff;
  width: 70px;
  height: 30px;
  border: 1px solid #69b5ff;
  border-radius: 7px;
  background-color: #69b5ff;
  font-size: 14px;
  letter-spacing: 4px;
  margin-left: 130px;
  cursor: pointer;
}

.reg-info .errorInfo {
  font-size: 14px;
  color: red;
}
</style>

