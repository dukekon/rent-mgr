<template>
  <tm-sheet :margin="[0, 0]" :padding="[0, 0]" transprent>
    <tm-grid class="fulled" :col="3" transprent>
      <tm-grid-item v-for="(item, i) in titles" :key="i">
        <tm-text class="mb-16" :font-size="32" color="white" :label="values[i]" />
        <tm-text :font-size="32" color="white" :label="item" />
      </tm-grid-item>
    </tm-grid>
  </tm-sheet>
  <!-- <tm-row>
    <tm-col _class="flex-1" v-for="(item, i) in values" :key="i" transprent>
      <tm-text :font-size="32" color="white" :label="item" />
    </tm-col>
  </tm-row>
  <tm-row>
    <tm-col v-for="(item, i) in titles" :key="i" transprent>
      <tm-text :font-size="28" color="white" :label="item" />
    </tm-col>
  </tm-row> -->
</template>

<script lang="ts" setup>
const values = [4, 7, 10]
const titles = ['现有租客', '现有租客', '历史租客']
</script>

<style lang="scss" scoped>

</style>