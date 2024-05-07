<!--
 * @Description: 收藏网址
 * @Author: prui
 * @Date: 2024-05-06 15:46:45
 * @LastEditTime: 2024-05-07 09:26:16
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
        <el-menu-item index="16">
          <span slot="title">常用工具</span>
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
          :lg="6"
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
          :lg="6"
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
          :lg="6"
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
          :lg="6"
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
          :lg="6"
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
          :lg="6"
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
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://developer.mozilla.org/zh-CN/docs/Web')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>MDN_WEB_DOCS</strong>
                </span>
                <p class="overflowClip_2">MDN Web Docs 社区</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="3">UI框架</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://v1.uviewui.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>uview</strong>
                </span>
                <p class="overflowClip_2">
                  uView
                  UI，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.ruoyi.vip/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>若依</strong>
                </span>
                <p class="overflowClip_2">基于SpringBoot的权限管理系统</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://hooray.github.io/vue-sku-form/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>电商sku</strong>
                </span>
                <p class="overflowClip_2">
                  基于 Vue & ElementUI 的电商 SKU 表单配置组件
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://element.eleme.cn/#/zh-CN/component/installation'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>Vue-Elementui</strong>
                </span>
                <p class="overflowClip_2">
                  Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0
                  的桌面端组件库
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="
            openWindow('https://www.itxst.com/vue-draggable/tutorial.html')
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>Vue拖拽组件</strong>
                </span>
                <p class="overflowClip_2">
                  Vue.Draggable是一款基于Sortable.js实现的vue拖拽插件
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('http://tinymce.ax-z.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>富文本编辑器</strong>
                </span>
                <p class="overflowClip_2">
                  TinyMCE是一款易用、且功能强大的所见即所得的富文本编辑器
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="12">图标库</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.iconfont.cn/?spm=a313x.home_index.i3.2.b1293a818qSpva')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>iconfont</strong>
                </span>
                <p class="overflowClip_2">
                  阿里妈妈MUX倾力打造的矢量图标管理、交流平台
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://fontawesome.com/icons?from=io')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>font-awesome v6 </strong>
                </span>
                <p class="overflowClip_2">
                  Font Awesome is the world's most popular icon set and toolkit
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="14">Web数据可视化</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://echarts.apache.org/zh/index.html')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>echarts</strong>
                </span>
                <p class="overflowClip_2">
                  一个基于 JavaScript 的开源可视化图表库
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="15">大佬社区</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://nav.fe32.top/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>网址收藏</strong>
                </span>
                <p class="overflowClip_2">大佬唐志远收藏的网址</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="16">常用工具</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://dayjs.fenxianglu.cn/category/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>Day.js中文网</strong>
                </span>
                <p class="overflowClip_2">
                  Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="8"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('http://www.axios-js.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>axios</strong>
                </span>
                <p class="overflowClip_2">易用、简洁且高效的http库</p>
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
  max-height: 100vh;
  overflow: hidden;
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
          font-size: 14px;
          color: #979898;
        }
      }
    }
  }
}
</style>
