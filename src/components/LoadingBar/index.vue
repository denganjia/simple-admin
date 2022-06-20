<template>


</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLoadingBar } from 'naive-ui';
const router = useRouter()
const loadingBar = useLoadingBar()
router.beforeEach(() => {
  loadingBar.start()
})
router.afterEach(() => {
  loadingBar.finish()
})
router.onError(() => {
  loadingBar.error()
})

</script>


<style scoped lang="scss">
</style>