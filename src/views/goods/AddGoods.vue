<template>
  <div class="add-goods">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goods' }">Goods</el-breadcrumb-item>
        <el-breadcrumb-item>Add Goods</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <h3>Add Goods</h3>
    </div>
    <div class="myform">
      <el-form
        :model="goodsForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="Catergory" >
          <el-button type="primary">Catergory</el-button>
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="goodsForm.title"></el-input>
        </el-form-item>
        <el-form-item label="Price" prop="price">
          <el-input v-model="goodsForm.price"></el-input>
        </el-form-item>
        <el-form-item label="Quantity" prop="quantity">
          <el-input v-model="goodsForm.quantity"></el-input>
        </el-form-item>
        <el-form-item label="Selling Point" prop="sellingPoint">
          <el-input v-model="goodsForm.sellingPoint"></el-input>
        </el-form-item>
        <el-form-item label="Picture" prop="picture">
          <el-button type="primary">Upload Picture</el-button>
        </el-form-item>
        <el-form-item label="Description " prop="descs">
          <el-input type="textarea" v-model="goodsForm.descs"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Confirm</el-button
          >
          <el-button @click="resetForm('ruleForm')">Clear</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsForm: {
        title: "", 
        price: "",
        quantity: "",
        sellingPoint: "",
        image: "",
        descs: "",
        category: "", 
        date1: "", //goods public date
        date2: "", 
      },
      rules: {
        title: [
          { required: true, message: "Please enter the goods name", trigger: "blur" },
          { min: 2, max: 8, message: "length should be 2 to 8 words", trigger: "blur" },
        ],
        price: [{ required: true, message: "Please enter the pirce", trigger: "blur" }],
        quantity: [{ required: true, message: "Please enter the quantity", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.add-goods {
  margin: 10px;
}
.title {
  padding: 10px;
  background: white;
  border: 1px solid #eee;
  margin-bottom: 20px;
}

.myform {
  background: white;
  padding: 10px;
  padding-right: 10px;
}
</style>