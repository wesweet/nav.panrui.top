<!--
 * @Description: 收藏网址
 * @Author: prui
 * @Date: 2024-05-06 15:46:45
 * @LastEditTime: 2024-05-06 17:23:54
 * @LastEditors: prui
 * 不忘初心,不负梦想
-->
<template>
  <el-container class="container">
    <el-aside width="280px" style="background-color: #2c2e2f">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        background-color="#2c2e2f"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleMenuItemClick"
      >
        <el-menu-item index="1">
          <span slot="title">个人站点</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">前端常用</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">UI框架</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">CSS相关</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">JavaScript</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span slot="title">Vue生态</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">React生态</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span slot="title">Node相关</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span slot="title">小程序相关</span>
        </el-menu-item>
        <el-menu-item index="10">
          <span slot="title">编译构建打包</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span slot="title">框架类库</span>
        </el-menu-item>
        <el-menu-item index="12">
          <span slot="title">图标库</span>
        </el-menu-item>
        <el-menu-item index="13">
          <span slot="title">平台社区</span>
        </el-menu-item>
        <el-menu-item index="14">
          <span slot="title">Web数据可视化</span>
        </el-menu-item>
        <el-menu-item index="15">
          <span slot="title">大佬社区</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-tag style="margin-bottom: 20px" id="1">个人站点</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://docsify.panrui.top/#/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>神奇文档</strong>
                </span>
                <p class="overflowClip_2">一个神奇的文档网站。</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://panrui.top/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>个人博客</strong>
                </span>
                <p class="overflowClip_2">不忘初心，不负梦想</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://chat.panrui.top/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>ChatGPT</strong>
                </span>
                <p class="overflowClip_2">交互式代码解决方案网站</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://static.panrui.top/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>静态资源</strong>
                </span>
                <p class="overflowClip_2">静态资源网站</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://only.panrui.top/#/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>唯一</strong>
                </span>
                <p class="overflowClip_2">唯一App应用H5版本</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="2">前端常用</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="3"
          :xl="6"
          @click="openWindow('https://www.bootcdn.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>bootcdn</strong>
                </span>
                <p class="overflowClip_2">
                  稳定、快速、免费的前端开源项目 CDN 加速服务
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
// 创建openWindow方法
const openWindow = (url: string) => {
  if (url) {
    window.open(url, "_blank");
  }
};
const handleMenuItemClick = (command: string) => {
  scrollToSection(command);
};
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="less" scoped>
.container {
  background-color: #f9f9f9;
  min-height: 100vh;
  .el-menu-demo {
    border-bottom: none;
    .el-menu-item {
    }
  }
  .grid-content {
    height: 100px;
    cursor: pointer;
    border-radius: 4px;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #e4ecf3;
    box-sizing: border-box;
    margin-bottom: 20px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-6px);
      -webkit-transform: translateY(-6px);
      -moz-transform: translateY(-6px);
      box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
      -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
      -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    .content {
      height: 100%;
      display: flex;
      align-items: center;
      .box {
        p {
          margin: 0;
          margin-right: 15px;
          color: #979898;
        }
      }
    }
  }
}
</style>
