<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :span="4">
          <el-card class="box-card">
            <div slot="header" class="clearfix" style="margin-bottom: 20px">
              <span>测试vue3.4 defineModel 属性</span>
            </div>
            <el-row :gutter="20" class="form-row">
              <el-col :span="6">年龄：</el-col>
              <el-col :span="6">{{ form.age }}</el-col>
              <el-col :span="6"> <Children v-model="form" /> </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
const form = ref({
  age: 18,
});
</script>

<style lang="less" scoped></style>
