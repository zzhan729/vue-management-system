<template>
  <div>
      <div class="header">
        <i v-if="!isCollapse" @click="changeMenu" class="iconfont el-icon-s-fold"></i>
        <i v-else @click="changeMenu" class="iconfont el-icon-s-unfold"></i>
        Header Part
      </div>
      <div class="content">
        <router-view/>
      </div>

  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  methods:{
    changeMenu(){
      this.$emit('changeCollapse')
    }
  }

}
</script>

<style lang="less" scoped>

.header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
  .iconfont {
    font-size: 24px;
  }
}
.header-right {
  float: right;
  padding-right: 20px;
  display: flex;
  .user {
    margin-left: 20px;
    span {
      position: relative;
      top: -4px;
      margin-right: 10px;
    }
  }
}

</style>