<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h3>乐心心率手环</h3>
      <p>表达你的与众不同，懂得你对自由的追逐，一份怦然心动的约定，一次心手合一的旅程，24小时全天候，连续心率检测，GPS全球定位。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-info">
        <div class="left">产品类型:</div>
        <div class="right">
          <!-- 单选radioChoose组件 -->
          <radioChoose :selections="colorTypes" @selectChange="onParamChange('proType', $event)"></radioChoose>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">售卖地区:</div>
        <div class="right">
          <!-- 下拉框selection组件 -->
          <selection :selections="districts" @selectChange="onParamChange('proPlaces', $event)"></selection>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">购买数量:</div>
        <div class="right">
          <!-- 购买数量组件 -->
          <count @selectChange="onParamChange('proNumber', $event)"></count>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">有效果时间:</div>
        <div class="right">
          <p>五年</p>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">总价:</div>
        <div class="right">
          <p>{{proNumber*500}}</p>
        </div>
      </div>
      <div class="sales-board-info">
        <button class="btn" @click="showPayDialog">立即购买</button>
      </div>
    </div>

    <!-- 产品说明信息 -->
    <div class="sales-board-description">
      <h3>产品说明</h3>
      <p>
        这款华为智能手表可通过蓝牙连接手机，满足通话、消息通知的需要。同时支持快捷支付、自动识别运动状态等功能，
        为您的生活带来很大的便利。个性时尚的外观，更为您整体增添一份别样的韵味。
      </p>
      <p>
        全新升级，同步手表数据到手机，记录全天的步数、距离、热量和爬高等数据，轨迹一键分享到朋友圈，科学规划跑步计划，
        同步计划到手机，运动中实时指导，逐步提高跑步成绩。
      </p>
      <p>
        连接手机蓝牙，即可使用通话功能，特设来电提醒和拒接功能通讯管理，即时消息同志，在手腕上即可完成查看和回复。
        可识别运动状态，进行实时健康监测， 1.5H磁吸快充。
      </p>
    </div>

    <!-- 更多相关产品 -->
    <div class="more-products">
      <h3>更多相关产品</h3>
    </div>

    <myDialog :isShow="isShowPayDialog" @close="closePayDialog">
      <h3 slot="header-info">华为智能运动手表支付页面</h3>
      <div slot="content-info">
        <table class="payDialog-table">
          <thead>
            <tr>
              <td>产品类型</td>
              <td>售卖地区</td>
              <td>购买数量</td>
              <td>有效时间</td>
              <td>总价</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{proType.name}}</td>
              <td>{{proNumber}}</td>
              <td>{{proPlaces.name}}</td>
              <td>五年</td>
              <td>{{proNumber*500}}</td>
            </tr>
          </tbody>
        </table>
        <bankChoose></bankChoose>
        <button class="payDialog-btn" @click="confirmBuy">确认购买</button>
      </div>
    </myDialog>

    <checkDialog :show-check-dialog="isShowCheckDialog" @on-close="closeCheckDialog"></checkDialog>
  </div>
</template>

<script>
import RadioChoose from "../../components/detailSelectionComponents/radioChoose";
import Selection from "../../components/detailSelectionComponents/Selection";
import Count from "../../components/detailSelectionComponents/Count";
import BankChoose from "../../components/detailSelectionComponents/bankChoose";
import CheckDialog from "../../components/detailSelectionComponents/checkDialog";
import Dialog from "../../components/headerComponents/dialog";

export default {
  components: {
    radioChoose: RadioChoose,
    selection: Selection,
    count: Count,
    myDialog: Dialog,
    bankChoose: BankChoose,
    checkDialog: CheckDialog
  },

  data() {
    return {
      proType: {},
      proPlaces: {},
      proNumber: 1,
      colorTypes: [
        {
          name: "红色版",
          value: 0
        },
        {
          name: "粉色版",
          value: 1
        },
        {
          name: "绿色版",
          value: 2
        },
        {
          name: "紫色版",
          value: 3
        }
      ],

      districts: [
        {
          name: "北京",
          value: 0
        },
        {
          name: "上海",
          value: 1
        },
        {
          name: "广州",
          value: 2
        },
        {
          name: "深圳",
          value: 3
        },
        {
          name: "武汉",
          value: 4
        },
        {
          name: "重庆",
          value: 5
        }
      ],
      isShowPayDialog: false,
      isShowCheckDialog: false
    };
  },

  methods: {
    onParamChange(attr, val) {
      this[attr] = val;
    },

    /* 点击立即购买显示购买对话框 */
    showPayDialog() {
      this.isShowPayDialog = true;
      /* 产生bug 修改后添加的代码 */
      this.isShowCheckDialog = false;
    },

    closePayDialog() {
      this.isShowPayDialog = false;
    },

    confirmBuy() {
      this.isShowPayDialog = false;
      this.isShowCheckDialog = true;
    },

    closeCheckDialog() {
      this.isShowCheckDialog = false;
    }
  },

  mounted() {
    this.proNumber = 1;
    (this.proType = this.colorTypes[0]), (this.proPlaces = this.districts[0]);
  }
};
</script>

<style>
</style>

