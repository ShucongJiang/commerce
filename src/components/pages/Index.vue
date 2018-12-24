<template>
  <div class="index">
    <!-- left side -->
    <div class="index-left">
      <!-- 所有产品 -->
      <div class="index-left-allProducts">
        <h3>全部产品</h3>
        <template v-for="product in productList">
          <div>
            <p>{{product.title}}</p>
            <ul>
              <li v-for="item in product.info">
                <a :herf="item.url">{{item.name}}</a>
                <span class="hotTag" v-show="item.hot">HOT</span>
              </li>
            </ul>
            <div v-show="!product.last" class="hr"></div>
          </div>
        </template>
      </div>

      <!-- 最新消息 -->
      <div class="index-left-news">
        <h3>最新消息</h3>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{item.value}}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- right side-->
    <div class="index-right">
      <slideShow :slides="slideImgs" :interval="time"></slideShow>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item,index) in boardList"
          :class="[{'item-even' : index % 2 !== 0}, 'board-item-' + item.id ]"
        >
          <div class="index-board-item-inner">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <route-link :to="{path: 'detail/' + item.toKey}">
              <button>点击购买</button>
            </route-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from "./slideShow.vue";
export default {
  components: {
    slideShow: slideShow
  },
  data() {
    return {
      time: 1500,
      productList: {
        pc: {
          title: "平板电脑",
          info: [
            { name: "二合一平板", url: "#" },
            { name: "娱乐平板", url: "#", hot: true },
            { name: "通话平板", url: "#" },
            { name: "MacBook", url: "#" }
          ]
        },

        app: {
          title: "智能数码",
          last: true,
          info: [
            { name: "VR眼睛", url: "#" },
            { name: "智能手表", url: "#" },
            { name: "智能家居", url: "#", hot: true },
            { name: "网络设备", url: "#" }
          ]
        }
      },

      // 最新消息
      newsList: [
        { value: "小米扫地机器人，脏活累活都能干", url: "#" },
        { value: "HUAWEI运动手环，你的手环能呼吸吗", url: "#" },
        { value: "多功能GPS运动手表", url: "#" }
      ],

      //主要产品数据
      boardList: [
        {
          title: "华为智能运动手表",
          description: "点击购买拥有更多好货",
          id: "1",
          toKey: "pro1"
        },
        {
          title: "乐心心率手环",
          description: "点击购买拥有更多好货",
          id: "2",
          toKey: "pro2"
        },
        {
          title: "小米空气净化套装",
          description: "点击购买拥有更多好货",
          id: "3",
          toKey: "pro3"
        },
        {
          title: "模拉智能航拍无人机",
          description: "点击购买拥有更多好货",
          id: "4",
          toKey: "pro4"
        }
      ],

      slideImgs: [
        {
          src: require("../../assets/slideShow-images/pic1.jpg"),
          description: "React入门与实战",
          herf: "#"
        },
        {
          src: require("../../assets/slideShow-images/pic2.jpg"),
          description: "成为更高级的Android工程师",
          herf: "#"
        },
        {
          src: require("../../assets/slideShow-images/pic3.jpg"),
          description: "玩转算法与面试",
          herf: "#"
        },
        {
          src: require("../../assets/slideShow-images/pic4.jpg"),
          description: "开发跨平台 Github App",
          herf: "#"
        }
      ]
    };
  }
};
</script>

<style  scoped>
.index {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}
.index-left {
  width: 25%;
  float: left;
  overflow: hidden;
}

.index-left-allProducts,
.index-left-news {
  background: #fff;
}

.index-left-allProducts {
  padding-bottom: 10px;
}

.index-left-news {
  margin-top: 25px;
  height: 500px;
  padding-bottom: 10px;
}

.index-left-allProducts .hr {
  border-bottom: 1px solid #999;
}

.index-left-allProducts h3,
.index-left-news h3 {
  height: 40px;
  line-height: 40px;
  background-color: #55ca93;
  color: #fff;
  letter-spacing: 5px;
  padding-left: 20px;
}

.index-left-allProducts p {
  margin: 15px 0 8px 20px;
  font-size: 20px;
  font-weight: bold;
}

.index-left-allProducts ul {
  margin: 0 0 20px 32px;
}

.index-left-news ul {
  margin: 15px 0 0 32px;
}

.index-left-allProducts ul li,
.index-left-news ul li {
  list-style: none;
  font-size: 14px;
  line-height: 25px;
}

.index-left-allProducts ul li a,
.index-left-news ul li a {
  text-decoration: none;
  color: #666;
}

.index-left-allProducts ul li a:hover,
.index-left-news ul li a:hover {
  color: #6f0;
  cursor: pointer;
}

.hotTag {
  background: #f00;
  color: #fff;
}

/* 右侧 */
.index-right {
  width: 75%;
  float: right;
}

/* .index-board-list {
  overflow: hidden;
  height: 720px;
} */

.index-board-item {
  width: 390px;
  height: 110px;
  background: #fff;
  padding: 20px;
  margin: 20px 10px 10px 20px;
  float: left;
}

.item-even {
  margin-right: 0;
}

.index-board-item-inner {
  padding: 0 0 0 120px;
}

.index-board-item-inner h3 {
  line-height: 20px;
}

.index-board-item-inner p {
  line-height: 50px;
}

.index-board-item-inner button {
  width: 90px;
  height: 40px;
  background: #55ca93;
  border: 3px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
}

.board-item-1 .index-board-item-inner {
  background: url(../../assets/board-item-images/1.jpg) no-repeat;
}

.board-item-2 .index-board-item-inner {
  background: url(../../assets/board-item-images/2.jpg) no-repeat;
}

.board-item-3 .index-board-item-inner {
  background: url(../../assets/board-item-images/3.jpg) no-repeat;
}

.board-item-4 .index-board-item-inner {
  background: url(../../assets/board-item-images/4.jpg) no-repeat;
}
</style>
