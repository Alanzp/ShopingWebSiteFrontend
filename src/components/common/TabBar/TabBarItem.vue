<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive:true,
    }
  },
  computed:{
    isActive(){
      console.log(this.$route.path.indexOf(this.path))
      console.log(this.path)
      console.log(this.$route.path.indexOf(this.path)!==-1)
      return this.$route.path&&this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red",
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
      console.log("itemClick")
    }
  }
};
</script>
<style lang="scss">
.tab-bar-item {
  flex: 1;
  text-align: center;
  span{
      font-size: 28px;
      vertical-align: middle;
  }
  div{
      font-size: 14px;
  }
}
.active{
  color: red;
}
</style>