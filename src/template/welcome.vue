<script setup lang="ts">
import { LxTable } from 'dyy-ui-plus'
import { ref } from 'vue'
const columns = ref([
  { type: 'selection', width: 50, align: 'center', fixed: 'left' },
  { type: 'index', label: '序号', width: 180, align: 'center' },
  {
    prop: 'date',
    label: '日期',
    headerSlot: 'headerDate',
    width: 180,
    align: 'center',
  },
  {
    label: '姓名',
    width: 180,
    align: 'center',
    children: [
      { prop: 'name', label: '女名', width: 180, align: 'center' },
      {
        prop: 'name2',
        label: '男名',
        slot: 'name2',
        width: 180,
        align: 'center',
      },
    ],
  },
  { prop: 'address', slot: 'address', width: 380, label: '地址' },
])

const handleSelectionChange = (selection) => {
  console.log(selection)
}
const data = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    name2: '王小虎1',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    name2: '王小虎2',
    address: '上海市普陀区金沙江路 1517 弄',
  },
])
</script>

<template>
  <lx-table
    :table-attrs="{ data, border: true }"
    :columns="columns"
    :table-events="{ selectionChange: handleSelectionChange }"
  >
    <template #address="{ row, item, $index, column }">
      666 {{ row.address }}
    </template>
    <template #name2="{ row, item, $index, column }">
      {{ row.name2 }}
    </template>
    <template #headerDate="{ row, item, $index, column }"> 日期133 </template>
  </lx-table>
</template>
