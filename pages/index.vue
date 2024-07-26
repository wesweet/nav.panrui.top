<template>
  <el-container class="container">
    <el-aside width="280px" style="background-color: #2c2e2f">
      <header class="logo-nav">
        <div class="logo">
          <img src="https://static.panrui.top/logo/logo.png" alt="logo" />
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
        <el-menu-item v-for="(item, index) in list" :index="index + 1 + ''">
          <span slot="title">{{ item.tag.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <template v-for="(item, index) in list">
        <el-tag style="margin-bottom: 20px" :id="index + 1 + ''">{{
          item.tag.name
        }}</el-tag>
        <el-row :gutter="20">
          <el-col
            :xs="24"
            :sm="8"
            :md="4"
            :lg="6"
            :xl="6"
            v-for="(m, n) in item.websites"
            :key="index + n"
            @click="openWindow(m.url)"
            ><div class="grid-content bg-purple-dark">
              <div class="content">
                <a></a>
                <div class="box">
                  <span>
                    <strong>{{ m.name }}</strong>
                  </span>
                  <p class="overflowClip_2">{{ m.desc }}</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
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
const handleMenuClick = () => {
  const menu: HTMLElement | null = document.getElementById("menu");
  // 判断菜单是否显示
  if (menu) {
    if (menu.style.display == "none" || menu.style.display == "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
};

interface ResponseData {
  code: number;
  msg: string;
  data: {
    list: any[];
  };
}
// 使用 useAsyncData 获取数据
const { data: websiteList, error } = useAsyncData<ResponseData>("getList", () =>
  $fetch("https://work.panrui.top:8443/app/website", {
    query: {
      page: 1,
      limit: 999
    },
  })
);

// 处理错误
if (error.value) {
  console.error("Error fetching data:", error.value);
}

// 在这里可以使用 websiteList
const list = ref<any[]>([]);
if (
  websiteList.value &&
  websiteList.value.data &&
  websiteList.value.data.list
) {
  list.value = websiteList.value.data.list;
}
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
