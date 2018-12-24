<template>
  <div class="dialog">
    <div class="dialog-wrap">
      <!-- dialog-cover相当于一个遮罩层 -->
      <div class="dialog-cover" v-show="isShow" @click="closeMyself"></div>
      <!-- 弹出对话框的动画效果 -->
      <transition name="dropDialog">
        <div class="dialog-container" v-show="isShow">
          <div class="dialog-header">
            <slot name="header-info"></slot>
            <div class="dialog-close" @click="closeMyself">x</div>
          </div>
          <div class="dialog-content">
            <slot name="content-info"></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: false
  },
  data() {
    return {};
  },
  props: {
    isShow: false
  },
  methods: {
    closeMyself() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>

</style>

