<script setup lang="ts">

const props = defineProps(['item', 'defineColumns', 'funcExportCsv', 'nameFileCsv', 'columnExclude']);

const exportCsvSave = () => {
  props.funcExportCsv(
    props.nameFileCsv ?? 'export_data',
    props.columnExclude ? { excludeColumns: props.columnExclude} : null
  );
};

</script>
<template>
  <div>
    <button @click="exportCsvSave">
      <GlobalIcon name="fa6-solid:file-csv" class="w-4 h-4 text-red-500"/>
    </button>
  </div>
</template>
