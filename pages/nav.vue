<!--
 * @Description: 收藏网址
 * @Author: prui
 * @Date: 2024-05-06 15:46:45
 * @LastEditTime: 2024-08-21 13:51:30
 * @LastEditors: panr99 1547177202@qq.com
 * 不忘初心,不负梦想
-->
<template>
  <el-container class="container">
    <!-- <el-aside width="280px" style="background-color: #2c2e2f">
      <header class="logo-nav">
        <div class="logo">
          <img src="https://static.panrui.top/logo/rui.png" alt="logo" />
          <span>网址收藏</span>
        </div>
        <div class="menu" @click="handleMenuClick" style="display: none">
          <el-button>菜单</el-button>
        </div>
      </header>
      <el-menu
        id="menu"
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
        <el-menu-item index="17">
          <span slot="title">第三方免费API</span>
        </el-menu-item>
        <el-menu-item index="18">
          <span slot="title">政府信息</span>
        </el-menu-item>
        <el-menu-item index="19">
          <span slot="title">VPN机场</span>
        </el-menu-item>
        <el-menu-item index="20">
          <span slot="title">摸鱼吃瓜</span>
        </el-menu-item>
        <el-menu-item index="21">
          <span slot="title">基金炒股</span>
        </el-menu-item>
        <el-menu-item index="22">
          <span slot="title">AI工具箱</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-tag style="margin-bottom: 20px" id="1">个人站点</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
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
                  <strong>ChatGPT3.5</strong>
                </span>
                <p class="overflowClip_2">ChatGPT3.5体验网站</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://chat4.panrui.top/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>ChatGPT4.0</strong>
                </span>
                <p class="overflowClip_2">ChatGPT4.0体验网站</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
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
          :xs="24"
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
      <el-tag style="margin-bottom: 20px" id="3">UI框架</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
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
          :xs="24"
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
          :xs="24"
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
          :xs="24"
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
          :xs="24"
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
          :xs="24"
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
        <el-col
          :xs="24"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://nutui.jd.com/#/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>nutui</strong>
                </span>
                <p class="overflowClip_2">京东风格的轻量级移动端组件库</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="4"
          :lg="6"
          :xl="6"
          @click="openWindow('https://wiredjs.com/showcase')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>wiredjs</strong>
                </span>
                <p class="overflowClip_2">一款手绘风格组件UI库</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="4">CSS相关</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://less.bootcss.com/#%E6%A6%82%E8%A7%88')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>less</strong>
                </span>
                <p class="overflowClip_2">less官方文档</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="6">Vue生态</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://vue-admin.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>vue管理平台集中地</strong>
                </span>
                <p class="overflowClip_2">vue管理平台集中地</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.nuxt.com.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>nuxt</strong>
                </span>
                <p class="overflowClip_2">
                  Nuxt是一个 开源框架 ，使得Web开发变得直观且强大
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="7">React生态</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://react-admin.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>react管理平台集中地</strong>
                </span>
                <p class="overflowClip_2">react管理平台集中地</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="8">Node相关</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://docs.nestjs.cn/9/introduction')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>nestjs</strong>
                </span>
                <p class="overflowClip_2">nest中文文档</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="12">图标库</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://www.iconfont.cn/?spm=a313x.home_index.i3.2.b1293a818qSpva'
            )
          "
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
          :xs="24"
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
      <el-tag style="margin-bottom: 20px" id="13">平台社区</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.coderutil.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>程序员盒子</strong>
                </span>
                <p class="overflowClip_2">程序员盒子</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="14">Web数据可视化</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
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
          :xs="24"
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
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.fomal.cc/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>北落师门</strong>
                </span>
                <p class="overflowClip_2">北落师门的博客</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://butterfly.js.org/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>butterfly主题</strong>
                </span>
                <p class="overflowClip_2">butterfly主题大佬教程文档</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="16">常用工具</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
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
          :xs="24"
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
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://ipw.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>IPV6测试</strong>
                </span>
                <p class="overflowClip_2">
                  致力于普及 IPv6 ,推进 IPv6 规模部署和应用
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.jyshare.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>菜鸟工具</strong>
                </span>
                <p class="overflowClip_2">菜鸟工具</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('http://www.wiicha.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>微查网</strong>
                </span>
                <p class="overflowClip_2">最全在线查询工具大全</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.soutushenqi.com/home')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>搜图神器</strong>
                </span>
                <p class="overflowClip_2">在线图片网站</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://old.wwei.cn/qrcode-yasuo.html')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>微微二维码</strong>
                </span>
                <p class="overflowClip_2">图片在线压缩工具</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://old.wwei.cn/qrcode-yasuo.html')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>微微二维码</strong>
                </span>
                <p class="overflowClip_2">图片在线压缩工具</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://tinify.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>熊猫压缩</strong>
                </span>
                <p class="overflowClip_2">图片在线压缩工具</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="17">第三方免费API</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://api.aa1.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>夏小柔</strong>
                </span>
                <p class="overflowClip_2">分享的API永不收费</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow('https://cloud.tencent.com/developer/article/2081636')
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>腾讯云社区</strong>
                </span>
                <p class="overflowClip_2">超百个免费api接口</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://apifox.com/apihub')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>apifox</strong>
                </span>
                <p class="overflowClip_2">
                  开放 API 共享平台，发现更多公开 API 项目
                </p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="18">政府信息</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://www.gov.cn/xinwen/2020-06/01/content_5516649.htm'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>民法典</strong>
                </span>
                <p class="overflowClip_2">学法知法懂法</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.mca.gov.cn/n156/n2679/index.html')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>民政数据</strong>
                </span>
                <p class="overflowClip_2">民政部统计数据</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://www.stats.gov.cn/sj/zxfb/202401/t20240117_1946624.html'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>2023年国民经济报告</strong>
                </span>
                <p class="overflowClip_2">
                  2023年国民经济回升向好 高质量发展扎实推进
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1901709.html'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>2022年国民经济报告</strong>
                </span>
                <p class="overflowClip_2">2022年国民经济顶住压力再上新台阶</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://www.stats.gov.cn/sj/zxfb/202302/t20230203_1901336.html'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>2021年国民经济报告</strong>
                </span>
                <p class="overflowClip_2">
                  2021年国民经济持续恢复 发展预期目标较好完成
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.stats.gov.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>国家统计局</strong>
                </span>
                <p class="overflowClip_2">国家统计局官方网站</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="19">VPN机场</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.miaoti.me/#/home')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>萌喵加速器</strong>
                </span>
                <p class="overflowClip_2">大陆首选 亚洲区最佳 VPN</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://tshl.work/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>天枢互联</strong>
                </span>
                <p class="overflowClip_2">与世界互联</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://pqjc.site/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>赔钱机场</strong>
                </span>
                <p class="overflowClip_2">真的是赔钱</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="20">摸鱼吃瓜</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://tophub.today/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>今日热榜</strong>
                </span>
                <p class="overflowClip_2">吃瓜摸鱼榜单</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="21">基金炒股</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="
            openWindow(
              'https://cn.investing.com/rates-bonds/u.s.-10-year-bond-yield'
            )
          "
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>美国国债</strong>
                </span>
                <p class="overflowClip_2">美国十年期国债收益率</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://dapanyuntu.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>大盘云图</strong>
                </span>
                <p class="overflowClip_2">大盘涨跌云图</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.cls.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>财联社</strong>
                </span>
                <p class="overflowClip_2">财经新闻</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://xueqiu.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>雪球</strong>
                </span>
                <p class="overflowClip_2">雪球</p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.jiaoyikecha.com/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>交易可查</strong>
                </span>
                <p class="overflowClip_2">交易可查</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
      <el-tag style="margin-bottom: 20px" id="22">AI工具箱</el-tag>
      <el-row :gutter="20">
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://www.aitop100.cn/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>aitop100</strong>
                </span>
                <p class="overflowClip_2">
                  我们聚合全球500+款AI智能软件，提供最新资讯、热门课程和活动
                </p>
              </div>
            </div>
          </div></el-col
        >
        <el-col
          :xs="24"
          :sm="6"
          :md="10"
          :lg="6"
          :xl="6"
          @click="openWindow('https://tongyi.aliyun.com/qianwen/')"
          ><div class="grid-content bg-purple-dark">
            <div class="content">
              <a></a>
              <div class="box">
                <span>
                  <strong>通义千问</strong>
                </span>
                <p class="overflowClip_2">阿里通义千问</p>
              </div>
            </div>
          </div></el-col
        >
      </el-row>
    </el-main> -->
  </el-container>
</template>

<script lang="ts" setup>
// // 创建openWindow方法
// const openWindow = (url: string) => {
//   if (url) {
//     window.open(url, "_blank");
//   }
// };
// const handleMenuItemClick = (command: string) => {
//   scrollToSection(command);
// };
// const scrollToSection = (sectionId: string) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };
// const handleMenuClick = () => {
//   const menu: HTMLElement | null = document.getElementById("menu");
//   // 判断菜单是否显示
//   if (menu) {
//     if (menu.style.display == "none" || menu.style.display == "") {
//       menu.style.display = "block";
//     } else {
//       menu.style.display = "none";
//     }
//   }
// };
</script>

<style lang="less" scoped>
.container {
  background-color: #f9f9f9;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  .logo-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    .logo {
      display: flex;
      align-items: center;
      height: 60px;
      font-size: 20px;
      img {
        width: 30px;
        margin-right: 20px;
      }
    }
  }
  .el-menu-demo {
    border-bottom: none;
    // .el-menu-item {
    // }
  }
  .grid-content {
    height: 90px;
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
      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 60px;
        }
      }
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
// 媒体查询
@media screen and (max-width: 768px) {
  .el-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .el-aside {
    width: 100%;
    .el-menu {
      display: none;
    }
    .menu {
      display: inline-flex !important;
    }
  }
  .el-main {
    overflow: visible;
  }
}
</style>
