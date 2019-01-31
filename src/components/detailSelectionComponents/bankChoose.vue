<template>
  <div class="banks">
    <h3>请选择银行</h3>
    <ul>
      <li
        v-for="(item, index) in banks"
        :class="[item.class, {active: index === nowIndex}]"
        @click="chooseSelection(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      nowIndex: 0,
      banks: [
        {
          name: "中国邮政储蓄银行",
          class: "youzheng"
        },
        {
          name: "中国建设银行",
          class: "jianshe"
        },
        {
          name: "中国邮政储蓄银行",
          class: "youzheng"
        },
        {
          name: "中国农业银行",
          class: "nongye"
        },
        {
          name: "中国银行",
          class: "chinabank"
        },
        {
          name: "中国工商银行",
          class: "gongshang"
        },
        {
          name: "交通银行",
          class: "jiaotong"
        },
        {
          name: "中信银行",
          class: "zhongxin"
        },
        {
          name: "支付宝",
          class: "zhifubao"
        }
      ]
    };
  },

  methods: {
    chooseSelection(index) {
      this.nowIndex = index;
      this.$emit('change', this.banks[index]);
    }
  },
};
</script>

<style>
.banks ul li {
  list-style: none;
  display: inline-block;
  width: 120px;
  height: 35px;
  border: 1px solid #aaa;
  background-image: url("../../assets/banks/banks.png");
  background-position: no-repeat;
  cursor: pointer;
  margin: 5px;
}

.banks ul li.active {
  border: 2px solid #55ca93;
}
.youzheng {
  background-position: -120px 0;
}
.jianshe {
  background-position: -720px 0;
}
.nongye {
  background-position: -1680px 0;
}
.zhanshang {
  background-position: -2160px 0;
}
.chinabank {
  background-position: -2520px 0;
}
.gongshang {
  background-position: -2640px 0;
}
.jiaotong {
  background-position: 360px 0;
}
.zhongxin {
  background-position: -480px 0;
}
.zhifubao {
  background-position: -1920px 0;
}
</style>