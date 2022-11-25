<template>
  <tm-row>
    <tm-col class="flex-1" v-for="(item, i) in values" :key="i" transprent>
      <tm-text :font-size="32" color="white" :label="item" />
    </tm-col>
  </tm-row>
  <tm-row>
    <tm-col v-for="(item, i) in titles" :key="i" transprent>
      <tm-text :font-size="28" color="white" :label="item" />
    </tm-col>
  </tm-row>
</template>

<script lang="ts" setup>
const values = [4, 5, 10]
const titles = ['现有租客', '现有租客', '历史租客']
</script>

<style lang="scss" scoped>

</style>