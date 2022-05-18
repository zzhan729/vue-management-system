<template>
  <div class="goods">
    <!--1. Search-->
    <div class="header">
      <el-input
        @change="searchItem"
        v-model="input"
        placeholder="Enter Something"
      ></el-input>
      <el-button @click="searchItem(input)" type="primary">Search</el-button>
      <el-button type="primary">
        <router-link to="/add-goods" style="color: white">
          Page Adding
        </router-link>
      </el-button>
      <el-button type="primary" @click="addGoods">Dialog Adding</el-button>
    </div>
    <!--2. table content---->
    <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="Goods ID" width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="Name"
          width="100"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column prop="price" label="Price" width="120">
        </el-table-column>
        <el-table-column prop="num" label="Quantity" width="120">
        </el-table-column>
        <el-table-column prop="category" label="Category" width="100">
        </el-table-column>
        <el-table-column prop="image" label="Image"> </el-table-column>
        <el-table-column
          prop="sellingPoint"
          label="Selling Point"
          width="160"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="descs"
          label="Description"
          width="100"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="Action" width="280">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
            >
              Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--3. page-->
    <div>
      <MyPagination
        :total="total"
        :pageSize="pageSize"
        @changePage="changePage"
      />
      <GoodsDialog ref="dialog"/>
    </div>
  </div>
</template>

<script>
import MyPagination from "../../components/MyPagination.vue";
import GoodsDialog from "./AddDialog.vue";
export default {
  components: {
    MyPagination,
    GoodsDialog,
  },
  data() {
    return {
      input: "",
      tableData: [],
      total: 10,
      pageSize: 1,
      type: 1,
      list: [],
      currentPage: 1,
      dialogVisible: false,
    };
  },
  methods: {
    http(page) {
      this.$api
        .getGoodsList({
          page,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            this.tableData = res.data.data;
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
          }
        });
    },
    changePage(num) {
      if (this.type == 1) {
        this.http(num);
      } else {
        this.tableData = this.list.slice((num - 1) * 3, num * 3);
      }
    },

    searchItem(val) {
      if (!val) {
        this.http(1);
        this.currentPage = 1;
        this.type = 1;
        return;
      }
      this.$api
        .getSearch({
          search: val,
        })
        .then((res) => {
          this.currentPage = 1;
          if (res.data.status === 200) {
            this.list = res.data.result;
            this.total = res.data.result.length;
            this.pageSize = 3;
            this.tableData = res.data.result.slice(0, 3);
            this.type = 2;
          } else {
            this.tableData = [];
            this.total = 1;
            this.pageSize = 1;
            this.type = 1;
          }
        });
    },

    handleEdit() {
      // Edit Content
    },
    handleDelete() {
      /* Delete Content */
    },

    addGoods() {
      this.$refs.dialog.dialogVisible = true
    },
    changeDialog() {
      this.$refs.dialog.dialogVisible = false;
    },
  },

  created() {
    this.http(1);
  },
};
</script>

<style lang="less" scoped>
.goods {
  margin: 10px;
}
.position {
  // background: #fff;
  padding: 10px;
  // border: 1px solid #eee;
  margin-bottom: 10px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
  .el-form-item {
    margin-bottom: 0;
  }
}
.wrapper {
  margin: 10px 0;
}
</style>