<template>
  <div class="goods">
    <!--1. Search-->
    <div class="header">
      <el-input v-model="input" placeholder="Enter Something"></el-input>
      <el-button type="primary">Search</el-button>
      <el-button type="primary">Add</el-button>
    </div>
    <!--2. table content---->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="Goods ID" width="100">
        </el-table-column>
        <el-table-column prop="date" label="Name" width="100">
        </el-table-column>
        <el-table-column prop="date" label="Price" width="100">
        </el-table-column>
        <el-table-column prop="name" label="Quantity" width="100">
        </el-table-column>
        <el-table-column prop="address" label="Type" width="100">
        </el-table-column>
        <el-table-column prop="address" label="Picture"> </el-table-column>
        <el-table-column prop="address" label="Selling Point">
        </el-table-column>
        <el-table-column prop="address" label="Description"> </el-table-column>
        <el-table-column prop="address" label="Action" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--3. page-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit() {
      // Edit Content
    },
    handleDelete() {
      /* Delete Content */
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  margin: 20px;
}

.header {
  display: flex;
  button {
    margin-left: 20px;
  }
}
.wrapper {
  margin: 20px 0;
}
</style>