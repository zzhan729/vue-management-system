<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#112f50"
      active-text-color="#409EFF"
      router
      :collapse = "isCollapse"
      >
      <el-menu-item>
        <span slot="title">Management System</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="/goods">
        <i class="el-icon-menu"></i>
        <span slot="title">Goods</span>
      </el-menu-item>
      <el-menu-item index="/params">
        <i class="el-icon-setting"></i>
        <span slot="title">Setting</span>
      </el-menu-item>
      <el-submenu index="/orders">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>Orders</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/orders/order-list">
            <i class="el-icon-s-order"></i>
            <span>Order List</span>
            </el-menu-item>
          <el-menu-item index="/orders/returned-order">
            <i class="el-icon-s-order"></i>
            <span>Returned Orders</span>
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/ads">
        <i class="el-icon-setting"></i>
        <span slot="title">Ads</span>
      </el-menu-item>  

    </el-menu>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  data(){
    return{
    }
  }

}
</script>

<style lang="less" scoped>

.el-menu {
  border-right: 0;
  .is-active {
    background: #1e78bf !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>