<template>
  <el-row :gutter="20" class="form-row">
    <el-col :span="10"
      ><el-button type="primary" @click="handleEditAge"
        >修改年龄</el-button
      ></el-col
    >
  </el-row>
</template>

<script lang="ts" setup>
const form: any = defineModel();

const handleEditAge = () => {
  form.value.age = Math.floor(Math.random() * 100);
};
</script>

<style lang="less" scoped>
.form-row {
  margin-bottom: 10px;
}
</style>
