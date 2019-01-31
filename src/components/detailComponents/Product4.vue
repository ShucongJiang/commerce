<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h3>模拉智能航拍无人机</h3>
      <p>
        全身流线型设计，贴心机身尾灯信号设计，科技感十足，高清镜头拍摄实时图传，
        遥控器设计便于操控，四翼可折叠方便携带，无论是家庭出游还是户外旅行都可轻松携带
      </p>
    </div>

    <div class="sales-board-form">
      <div class="sales-board-info">
        <div class="left">产品类型:</div>
        <div class="right">
          <radioChoose :selections="productTypes" @selcectChange="onParamChange('proType', $event)"></radioChoose>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">购买数量:</div>
        <div class="right">
          <count @selectChange="onParamChange('proNumber', $event)"></count>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">适用人群:</div>
        <div class="right">儿童不宜靠近</div>
      </div>
      <div class="sales-board-info">
        <div class="left">有效时间:</div>
        <div class="right">
          <p>半年</p>
        </div>
      </div>
      <div class="sales-board-info">
        <div class="left">总价:</div>
        <div class="right">{{proNumber*400}}</div>
      </div>
      <div class="sales-board-info">
        <button class="btn" @click="showPayDialog">立即购买</button>
      </div>
    </div>

    <div class="sales-board-description">
      <h3>产品说明</h3>
      <table class="sales-board-table">
        <tbody>
          <tr class="table-row">
            <td>安全安保</td>
            <td>办公文教</td>
            <td>彩票</td>
            <td>车辆物流</td>
            <td>成人用品</td>
            <td>出版传媒</td>
            <td>电脑硬件</td>
          </tr>
          <tr class="table-row">
            <td>电子电工</td>
            <td>房地产建筑装修</td>
            <td>分类平台</td>
            <td>服装鞋帽</td>
            <td>箱包饰品</td>
            <td>化工原料制品</td>
            <td>机械设备</td>
          </tr>
          <tr class="table-row">
            <td>家庭日用品</td>
            <td>家用电器</td>
            <td>教育培训</td>
            <td>节能环保</td>
            <td>金融服务</td>
            <td>礼品</td>
            <td>旅游住宿</td>
          </tr>
          <tr class="table-row">
            <td>美容化妆</td>
            <td>母婴护理</td>
            <td>农林牧渔</td>
            <td>软件设备</td>
            <td>商务服务</td>
            <td>生活服务</td>
            <td>食品保健品</td>
          </tr>
          <tr class="table-row">
            <td>手机数码</td>
            <td>通讯服务设备</td>
            <td>网络服务</td>
            <td>医疗服务</td>
            <td>游戏</td>
            <td>运动休闲娱乐</td>
            <td>招商加盟</td>
          </tr>
        </tbody>
      </table>
    </div>

    <myDialog :isShow="isShowPayDialog" @close="closePayDialog">
      <h3 slot="header-info">模拉智能航拍无人机</h3>
      <div slot="content-info">
        <table class="payDialog-table">
          <thead>
            <tr>
              <td>产品类型</td>
              <td>购买数量</td>
              <td>适用人群</td>
              <td>有效时间</td>
              <td>总价</td>
            </tr>
          </thead>
          <tbody>
            <td>{{}}</td>
            <td>{{proNumber}}</td>
            <td></td>
            <td>半年</td>
            <td>{{}}</td>
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
import Count from "../../components/detailSelectionComponents/Count";
import RadioChoose from "../../components/detailSelectionComponents/radioChoose";
import BankChoose from "../../components/detailSelectionComponents/bankChoose";
import CheckDialog from "../../components/detailSelectionComponents/checkDialog";
import Dialog from "../../components/headerComponents/dialog";
export default {
  components: {
    count: Count,
    radioChoose: RadioChoose,
    myDialog: Dialog,
    bankChoose: BankChoose,
    checkDialog: CheckDialog
  },

  data() {
    return {
      proNumber: 1,
      proType: {},
      productTypes: [
        {
          name: "小型",
          value: 0
        },
        {
          name: "中小型",
          value: 1
        },
        {
          name: "中型",
          value: 2
        },
        {
          name: "大型",
          value: 3
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

    showPayDialog() {
      this.isShowPayDialog = true;
    },

    closePayDialog() {
      this.isShowPayDialog = false;
    },

    confirmBuy() {
      this.isShowPayDialog = false;
      this.isShowCheckDialog = true;
    },

    closeCheckDialog() {
      this.isShowCheckDialog = false
    }
  },

  mounted() {
    this.proNumber = 1;
    this.proType = this.productTypes[0];
  }
};
</script>

<style>
</style>
