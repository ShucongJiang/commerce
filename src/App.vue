<template>
  <div id="app">
    <div class="app-header">
        <div class="app-header-inner">
            <router-link :to="{path: '/'}">
              <img src="./assets/logo.png" alt="vue.logo" class="header-img">
            </router-link>
            <ul>
              <li v-show="userName!==''">{{userName}}</li>
              <li @click="logClick" v-show="userName===''">登录</li>
              <li>|</li>
              <li @click="quit" v-show="userName!==''">退出</li>
              <li @click="regClick" v-show="userName===''">注册</li>
              <li>|</li>
              <li @click="aboutClick">关于</li>
            </ul>

        </div>
    </div>
    <!-- content -->
    <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>

    <!-- footer -->
    <div class="app-footer">
      <p>@by jiangshucong 2018-11-19</p>
    </div>
    <myDialog :isShow="isShowAboutDialog" @close="closeDialog('isShowAboutDialog')">
      <h3 slot="header-info">关于我们的详细信息</h3>
      <!-- 关于组件 -->
      <aboutInfo slot="content-info"></aboutInfo>
    </myDialog>
  </div>
</template>

<script>
import Dialog from './components/headerComponents/dialog.vue'
import AboutInfo from './components/headerComponents/AboutInfo.vue'


export default {
  name: 'App',
  components: {
    myDialog: Dialog,
    aboutInfo: AboutInfo
  },
  data () {
    return {
      userName:'',
      isShowAboutDialog: false,
    }
  },
  methods: {
    //通过传参凡是将弹出框统一关闭
    closeDialog (attr) {
      this[attr] == fasle
    }
  }
}
</script>

<style>
  /* header */
  .app-header {
    width: 100%;
    height: 80px;
    background-color: rgb(131, 226, 138)
  }

  .app-header-inner {
    width:80%;
    margin:0 auto;
  }

  .app-header-inner img {
    width: 70px;
    height: 70px;
    margin-top:5px;
  }

  .app-header .app-header-inner ul {
    float: right;
    list-style-type: none;
  }

  .app-header .app-header-inner ul li {
    display: inline-block;
    font-size: 18px;
    line-height: 80px;
    cursor:pointer;
  }

  .app-header .app-header-inner ul li:hover {
    color:brown;
  }

  .app-content {
    width: 100%;
    height: 1000px;
    background:#f4f9f7;
    overflow: hidden;
  }

  /* footer */
  .app-footer {
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    height: 60px;
    background: #ddd;
  }

  .app-footer p {
    text-align: center;

  }
</style>
