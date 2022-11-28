<template>
  <view class="list-bill">
    <!-- 导航栏 -->
    <uni-nav-bar class="relative shadow-md shadow-blue-600/6+0"
                 left-icon="left"
                 status-bar>
      <!--todo 分页器 -->
      <view class="flex w-full">
        <uni-segmented-control class="flex-1 self-end"
                               :current="index"
                               :values="segmented"
                               style-type="text"
                               @click-item="" />
      </view>
    </uni-nav-bar>
    <!--todo 头部 -->
    <view class="header py-2 text-white bg-blue-500">
      <view class="total-amount flex items-center">
        <view class="flex-1/5"></view>
        <text class="flex-3/5 text-center">
          未完成总计：{{ Number(521).toFixed(2) }}元
        </text>
        <view class="flex-1/5"></view>
      </view>
    </view>

    <view class="main">
      <uni-swipe-action class="bill pt-3">
        <!--todo 卡片 -->
        <uni-swipe-action-item :right-options="actions"
                               @click=""
                               v-for="item in 5"
                               :key="item">
          <view class="pb-3 px-3">
            <view class="bill-item flex justify-between px-4 py-4 rounded-lg bg-white m-shadow">
              <view class="right flex flex-col">
                <view class="bill-item__title mb-5 mr-6 border-b-1 border-light-600">
                  <text class="mr-1 text-base font-semibold">
                    1号房
                  </text>
                  <text class="text-sm text-gray-400">
                    老张
                  </text>
                </view>
                <view class="bill-item-date text-sm">
                  <text class="mr-1 text-gray-400">
                    最后一次: {{ '2022.22.22' }}
                  </text>
                  <text class="text-red-600">
                    逾期{{ 200 }}天
                  </text>
                </view>
              </view>
              <view class="left flex flex-col justify-between items-end">
                <view class="bill-item__status px-2 py-1 text-xs border-1 rounded-25"
                      :class="'text-blue-600'">
                  <text class="">
                    已完成
                  </text>
                </view>
                <text class="bill-item__num ">
                  ~<text class="text-xl text-black">
                    {{ Number(120).toFixed(2) }}元
                  </text>
                </text>
              </view>
            </view>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

//#region 导航
const index = ref(0)
const segmented = [
  '未完成',
  '已完成',
  '全部'
]
//#endregion

//#region 内容
const actions = [
  {
    text: '完成',
    style: {
      color: '#65a30d',
      backgroundColor: 'rgba(0,0,0,0)',
    }
  },
  {
    text: '删除',
    style: {
      color: 'red',
      backgroundColor: 'rgba(0,0,0,0)',
    }
  }
]
//#endregion
</script>