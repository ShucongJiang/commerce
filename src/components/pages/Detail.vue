<template>
  <div class="detail">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productImg">
        <ul>
          <router-link
            v-for="item in products"
            :to="{path: item.path}"
            tag="li"
            active-class="active"
          >{{item.name}}</router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "华为智能运动手表",
          path: "pro1",
          active: false
        },
        {
          name: "乐心心率手环",
          path: "pro2",
          active: false
        },
        {
          name: "小米空气净化套装",
          path: "pro3",
          active: false
        },
        {
          name: "模拉智能航拍无人机",
          path: "pro4",
          active: false
        }
      ],

      imgMap: {
        "/detail/pro1": require("../../assets/board-item-images/1.jpg"),
        "/detail/pro2": require("../../assets/board-item-images/2.jpg"),
        "/detail/pro3": require("../../assets/board-item-images/3.jpg"),
        "/detail/pro4": require("../../assets/board-item-images/4.jpg")
      }
    };
  },

  computed: {
    productImg() {
      return this.imgMap[this.$route.path];
    }
  }
};
</script>

<style>
.detail {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
}

.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}

.detail-left .product-board {
  background: #fff;
  padding: 20px 0;
}

.detail-left .product-board ul {
  margin-top: 15px;
}

.detail-left .product-board li {
  width: 170px;
  list-style: none;
  line-height: 33px;
  font-size: 15px;
  cursor: pointer;
  text-align: left;
  padding-left: 30px;
}

.detail-left .product-board ul .active,
.detail-left .product-board ul li:hover {
  background: #55ca93;
  color: #fff;
}

/* 右侧 */
.detail-right {
  float: right;
  width: 980px;
  margin-left: 20px;
  .payDialog-table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;
  }
  .payDialog-table thead tr td {
    border: 1px solid #e3e3e3;
    padding: 3px 5px;
    background: #55c396;
    text-align: center;
  }
  .payDialog-table tbody tr td {
    border: 1px solid #e3e3e3;
    padding: 3px 5px;
    text-align: center;
    font-size: 14px;
  }
  .payDialog-btn {
    width: 80px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 7px;
    background: #55ca93;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
  }
  overflow: hidden;
}

.sales-board {
  background: #fff;
}

/* 产品头部信息 */
.sales-board-intro h3 {
  padding: 15px 20px;
  font-size: 20px;
}

.sales-board-intro p {
  padding: 10px 20px;
  line-height: 25px;
  color: #999;
}

/* 产品规格说明 */
.sales-board-form {
  padding: 10px 0 0 25px;
}

.sales-board-form .sales-board-info {
  margin: 15px 0;
}

.sales-board-info .left {
  display: inline-block;
  width: 100px;
  margin: 3px 10px 0 0;
  font-size: 15px;
  color: #666;
}

.sales-board-info .right {
  display: inline-block;
  width: 75%;
}

.sales-board-info .right p {
  color: #444;
  font-size: 15px;
}

.sales-board-info .btn {
  width: 80px;
  height: 35px;
  background: #55ca93;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-left: 115px;
  cursor: pointer;
}

/* 产品说明信息 */
.sales-board-description {
  border-top: 20px solid #f4f9f7;
}
.sales-board-description h3 {
  font-size: 20px;
  padding: 15px 20px;
}
.sales-board-description p {
  background: #f7fcff;
  line-height: 25px;
  color: #999;
  padding: 10px 20px;
}

/* 表格 */
.sales-board-table {
  width: 100%;
  border-collapse: collapse;
}

.sales-board-table tr td {
  padding: 12px 10px;
  color: #777;
  text-align: center;
  font-size: 14px;
  border: 1px solid #eee;
}

.sales-board-table tr td:hover {
  background: #eee;
}
/* 更多相关产品 */
.more-products {
  border-top: 20px solid #f4f9f7;
}
.more-products h3 {
  padding: 15px 20px;
}

.payDialog-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

.payDialog-table thead tr td {
  border: 1px solid #e3e3e3;
  padding: 3px 5px;
  background: #55c396;
  text-align: center;
}
.payDialog-btn {
  width:80px;
  height:40px;
  border:1px solid #eee;
  border-radius:7px;
  background:#55ca93;
  font-size:15px;
  color:#fff;
  cursor:pointer;
}
</style>

