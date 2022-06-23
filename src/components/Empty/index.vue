<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>


<script setup lang="ts" name="empty">


</script>


<style scoped lang="scss">
</style>