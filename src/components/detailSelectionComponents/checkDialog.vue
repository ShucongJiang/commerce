<template>
  <div class="checkDialog">
    <payDialog :isShow="showCheckDialog" @close="closeCheckDialog">
      <h3 slot="header-info">请确认您的支付状态</h3>
      <div slot="content-info">
        <span @click="paySuccess">支付成功</span>
        <span @click="payFailed">支付失败</span>
      </div>
    </payDialog>

    <payDialog :isShow="isShowPaySuccess" @close="closePaySuccess">
      <h3 slot="header-info">您的购买状态</h3>
      <p slot="content-info">购买成功</p>
    </payDialog>

    <payDialog :isShow="isShowPayFailed" @close="closeFailed">
      <h3 slot="header-info">您的购买状态</h3>
      <p slot="content-info">购买失败</p>
    </payDialog>
  </div>
</template>
<script>
import Dialog from "../headerComponents/dialog";
export default {
  components: {
    payDialog: Dialog
  },

  props: {
    showCheckDialog: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isShowPaySuccess: false,
      isShowPayFailed: false
    };
  },

  methods: {
    /* 关闭支付状态选择框 */
    closeCheckDialog() {
      this.showCheckDialog = false;
    },

    /* 点击支付成功 */
    paySuccess() {
      /* showCheckDialog是从父级获取过来的数据，在子组件中一般
         不修改，所以触发事件on-close来关闭支付状态选择框 */
      //   this.showCheckDialog = false;
      this.$emit("on-close");
      this.isShowPaySuccess = true;
    },
    /* 点击支付失败 */
    payFailed() {
      //   this.showCheckDialog = false;
      this.$emit("on-close");
      this.isShowPayFailed = true;
    },
    closePaySuccess() {
      this.isShowPaySuccess = false;
    //   this.$router.push({path:'/orderList'})
    },
    closeFailed() {
      this.isShowPayFailed = false;
    }
  },

  mounted() {}
};
</script>

<style>
.checkDialog span {
  border: 1px solid #ccc;
  padding: 7px 9px;
  background: #55ca93;
  margin: 5px 8px 5px 30px;
  cursor: pointer;
}
</style>

