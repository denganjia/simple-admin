<script setup lang="ts">
import { DEFAULT_ICON_CONFIGS, IconProvider } from '@icon-park/vue-next';
import LoadingBar from "@/components/LoadingBar/index.vue"
import { darkTheme } from 'naive-ui'
import { ref } from "vue"
IconProvider({ ...DEFAULT_ICON_CONFIGS, strokeWidth: 3, strokeLinejoin: 'miter', strokeLinecap: 'square' });

const isDark = ref(false)
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <loading-bar></loading-bar>
            <router-view></router-view>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>

</template>

<style>
</style>
