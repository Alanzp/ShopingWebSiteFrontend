<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '@/components/common/TabBar/TabBar.vue'
export default {
  components:{
    TabBar,
  }
}
</script>
<style lang="scss">
 
</style>
