<template>
  <div>
    <div id="tab-bar">
        <tab-bar-item path="/home" activeColor="blue">
            <template v-slot:item-icon>
                <span class="iconfont icon-store"></span>
            </template>
            <template v-slot:item-text>
                <div>首页</div>
            </template>
        </tab-bar-item >
        <tab-bar-item path="/category" activeColor="red">
            <template v-slot:item-icon>
                <span class="iconfont icon-all"></span>
            </template>
            <template v-slot:item-text>
                <div>分类</div>
            </template>
        </tab-bar-item >
        <tab-bar-item path="/car" activeColor="green">
            <template v-slot:item-icon >
                <span class="iconfont icon-cart-Empty"></span>
            </template>
            <template v-slot:item-text>
                <div>购物车</div>
            </template>
        </tab-bar-item >
        <tab-bar-item path="/profile" activeColor="deepPink">
            <template v-slot:item-icon>
                <span class="iconfont icon-bussiness-man"></span>
            </template>
            <template v-slot:item-text>
                <div>我的</div>
            </template>
        </tab-bar-item>
    </div>
  </div>
</template>
<script>
import TabBarItem from './TabBarItem.vue'
export default {
  name: "TarBar",
  components:{
      TabBarItem,
  }
};
</script>
<style scoped>
@import "../../../assets/font/iconfont.css";
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f3f3f3;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -4px 1px rgba(100, 100, 100, 0.2);
}
</style>