<template>
  <div>
    <n-form ref="formRef" label-placement="left" label-width="auto">
      <n-grid :cols="24" :x-gap="24" :collapsed-rows="1" :collapsed="collapsed">
        <n-form-item-gi :span="item.span ?? 6" v-for="item in searchFields" :label="item.title">
          <component :is="item.filedType ? NaiveUI[`N${item.filedType}`] : null" v-bind="item.fieldProps"></component>
        </n-form-item-gi>
        <n-form-item-gi suffix :span="6" label=" ">
          <n-space align="center">
            <n-button type="primary" size="small">搜索</n-button>
            <n-button size="small">重置</n-button>
            <n-button text @click="collapsed = !collapsed">{{ collapsed ? '展开' : '合并' }}</n-button>
          </n-space>
        </n-form-item-gi>
      </n-grid>
    </n-form>
    <n-data-table :columns="tableFields" :data="table.data.value">

    </n-data-table>
  </div>


</template>


<script setup lang="ts">
import * as NaiveUI from "naive-ui"
import { ProTableColumns } from "./types"
import { APIBaseResult } from "@/apis/type"
import { computed, ref } from "vue"
import { useTable } from "@/hooks/useTable"
const props = defineProps<Props>()
const table = useTable(props.api, props.postData)
interface Props {
  columns: ProTableColumns,
  api: (params?: any) => Promise<APIBaseResult<any>>,
  postData?: (res: any) => { datalist: any[], total: number }
}
// 搜索表单字段
const searchFields = computed(() => {
  return props.columns.filter(column => column.search !== false)
})
// 表格字段
const tableFields = computed(() => {
  return props.columns.filter(column => column.hideInTable !== true)
})
const collapsed = ref(true)
</script>


<style scoped lang="scss">
.n-input-number,
.n-date-picker,
.n-time-picker {
  width: 100%
}
</style>