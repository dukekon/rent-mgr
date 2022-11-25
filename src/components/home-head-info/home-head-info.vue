<template>
  <tm-row>
    <tm-col v-for="(item, i) in values" :key="i" transprent>
      <tm-text :font-size="32" color="white" :label="item" />
    </tm-col>
  </tm-row>
  <tm-row>
    <tm-col v-for="(item, i) in titles" :key="i" transprent>
      <tm-text :font-size="32" color="white" :label="item" />
    </tm-col>
  </tm-row>
</template>

<script lang="ts" setup>
const values = [13, 7, 112]
const titles = ['现有租客', '现有租客', '历史租客']
</script>

<style lang="scss" scoped>

</style>