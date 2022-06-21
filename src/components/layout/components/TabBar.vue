<template>
  <div class="tab">

  </div>

</template>


<script setup lang="ts" name="TabBar">
import { VNodeChild, ref } from 'vue';

type Options = {
  title: string,
  key: string,
  icon?: (() => VNodeChild),
  closable: boolean
}
const options = ref([{ title: '123', key: '123', closable: true }])
defineProps<{ options?: Options[] }>()
</script>


<style scoped lang="scss">
.tab {
  background-color: var(--n-color);
  color: var(--n-text-color);
  transition: box-shadow .3s var(--n-bezier), background-color .3s var(--n-bezier), color .3s var(--n-bezier);
  box-sizing: border-box;
  width: 100%;
}
</style>