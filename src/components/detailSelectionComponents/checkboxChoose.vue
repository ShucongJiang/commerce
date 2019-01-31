<template>
  <div class="checkbox-component">
    <ul>
      <li
        v-for="(item, index) in selections"
        :class="{active: item.checked}"
        @click="toggleSelection(item, index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selections: Array
  },

  data() {
    return {
      nowIndex: []
    }
  },
  methods: {
    toggleSelection(item, index) {
      item.checked = !item.checked;
      if (this.nowIndex.indexOf(index) === -1) {
        this.nowIndex[index] = item;
      }

      if (!item.checked && this.nowIndex.indexOf(item) != -1) {
        this.nowIndex.splice(index, 1);
      }

      this.$emit("selectChange", this.nowIndex);
    }
  }
};
</script>
<style>
.checkbox-component ul li {
  list-style: none;
  display: inline-block;
  padding: 0 10px;
  line-height: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
}
.checkbox-component ul li.active {
  background: #55ca93;
  color: #fff;
}
</style>
