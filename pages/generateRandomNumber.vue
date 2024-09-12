<template>
  <el-container>
    <el-header>
      <el-row
        :gutter="20"
        type="flex"
        class="row-bg"
        justify="space-between"
        style="margin-top: 20px"
      >
        <el-col :span="6">
          <el-input
            v-model="currentRandomNumber"
            placeholder="请输入内容"
          ></el-input
        ></el-col>
        <el-col :span="6">
          <el-button type="primary" @click="generateRandomNumber"
            >生成随机数</el-button
          ></el-col
        >
        <!-- <el-col :span="6">
          <el-select
            v-model="searchVal"
            placeholder="查看已生成的数据"
            filterable
          >
            <el-option
              v-for="item in randomNumbers"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-col> -->
      </el-row>
      <el-row
        :gutter="20"
        type="flex"
        class="row-bg"
        justify="space-between"
        style="margin-top: 20px"
      >
        <el-col :span="24">
          <div style="overflow-wrap: break-word">
            <span v-for="item in randomNumbers" style="margin: 0 5px">{{
              item
            }}</span>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts" setup>
// 定义一个数组用来保存生成的随机数
const randomNumbers: any = ref([]);

onMounted(() => {
  // 如果缓存当中有值
  if (typeof window !== "undefined" && window.localStorage) {
    randomNumbers.value = JSON.parse(
      window.localStorage.getItem("randomNumbers")!
    );
  }
});

// 定义一个变量来保存当前的随机数
const currentRandomNumber: any = ref(0);
const searchVal: any = ref("");
const generateRandomNumber = () => {
  for (let index = 0; index < 100; index++) {
    const min = 0.05;
    const max = 5;
    // 生成一个介于0和1之间的随机数
    let randomNumber = Math.random();
    // 缩放这个随机数到介于min和max之间
    randomNumber = min + (max - min) * randomNumber;
    // 保留两位小数
    randomNumber = parseFloat(randomNumber.toFixed(2));
    // 判断生成的随机数是否已经存在，如果存在则重新生成随机数
    while (randomNumbers.value.includes(randomNumber)) {
      randomNumber = Math.random();
      randomNumber = min + (max - min) * randomNumber;
      randomNumber = parseFloat(randomNumber.toFixed(2));
    }
    currentRandomNumber.value = randomNumber;
    randomNumbers.value.push(randomNumber);
  }
  // 将randomNumbers存入到缓存当中
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(
      "randomNumbers",
      JSON.stringify(randomNumbers.value)
    );
  }
};
</script>
