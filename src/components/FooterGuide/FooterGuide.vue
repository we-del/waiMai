<template>
  <div>
    <div class="footer-toggle">
      <div class="guide-item " :class="{on:$route.path==='/msite'}" @click="goto('msite')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="guide-item" :class="{on:$route.path==='/search'}"  @click="goto('search')">
        <i class="iconfont icon-sousuo2"></i>
        <span>搜索</span>
      </div>
      <div class="guide-item" :class="{on:$route.path==='/order'}"  @click="goto('order')">
        <i class="iconfont icon-quanbudingdan"></i>
        <span>订单</span>
      </div>
      <div class="guide-item" :class="{on:$route.path==='/profile'}"  @click="goto('profile')">
        <i class="iconfont icon-yonghu2"></i>
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
       currentRoute:''
    }
  },
  methods:{
    goto(target){
      if(this.currentRoute ===target){
        console.log(1)
        return 
      }
      this.$router.replace(target)
      this.currentRoute = target
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer-toggle
  top-border-1px($bc)
  position fixed
  left 0
  bottom 0
  display flex
  width 100%
  height 50px
  flex-flow nowrap row
  justify-content space-around
  .guide-item
    display flex  
    flex-direction column  
    align-items center
    margin-top 5px
    font-size 14px
    &.on
      color $green
    i
      font-size 20px
</style>
