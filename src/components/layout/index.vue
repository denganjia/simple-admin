<template>
  <n-layout has-sider style="height: 100vh;">
    <n-layout-sider width="250" show-trigger="bar" :show-collapsed-content="false" :collapsed-width="0"
      v-model:collapsed="collapsed" bordered :native-scrollbar="false" :inverted="theme.navBarStyle === 'dark'">
      <MenuBar :collapsed="collapsed"></MenuBar>
    </n-layout-sider>
    <n-layout :native-scrollbar="false">
      <n-layout-header>
        <Header v-model:collapsed="collapsed"></Header>
        <TabBar></TabBar>
      </n-layout-header>
      <n-layout-content embedded :content-style="contentStyle">
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </n-layout-content>
      <!-- <n-layout-footer embeded>
        <p class="footer">Made by 池鱼</p>
      </n-layout-footer> -->
    </n-layout>
  </n-layout>

</template>


<script setup lang="ts" name="layout">
import MenuBar from './components/MenuBar.vue';
import Header from "./components/Header.vue";
import TabBar from "./components/TabBar.vue"
import { ref, CSSProperties, computed, watch } from "vue"
import { useTheme, useTabStore } from '@/storages';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const tabStore = useTabStore()
// tabs color
const theme = useTheme()

const contentColor = computed(() => (theme.darkTheme ? "#18181c" : '#fff'))
const collapsed = ref(false)

const contentStyle: CSSProperties = {
  boxSizing: 'border-box',
  padding: '15px',
  height: "calc(100vh - 90px)"
}

//监听路由变化 设置激活的tab
watch(() => route.name, (n) => {
  if (tabStore.active.key !== n) {
    tabStore.setActiveTab(n as string)
  }
}, { immediate: true })

// 监听activeTab变化 设置路由
watch(() => tabStore.active, (n) => {
  if (n.key !== route.name) {
    router.push({ name: n.key as string })
  }
})
</script>


<style scoped lang="scss">
:deep(.n-tabs .n-tabs-nav.n-tabs-nav--card-type .n-tabs-tab.n-tabs-tab--active) {
  border-bottom: 1px solid var(--n-tab-border-color);
}

.content {
  min-height: 100%;
  background-color: v-bind(contentColor);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 3px;
  box-shadow:
    0px 0.1px 2.2px rgba(0, 0, 0, 0.005),
    0px 0.3px 5.3px rgba(0, 0, 0, 0.009),
    0px 0.5px 10px rgba(0, 0, 0, 0.013),
    0px 0.9px 17.9px rgba(0, 0, 0, 0.017),
    0px 1.7px 33.4px rgba(0, 0, 0, 0.025),
    0px 4px 80px rgba(0, 0, 0, 0.07);
}

.footer {
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
</style>