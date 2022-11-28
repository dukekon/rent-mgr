<template>
	<view class="list-renter">
		<!-- 导航栏 -->
		<uni-nav-bar class="m-shadow"
								 left-icon="left"
								 status-bar>
			<!--todo 分页器 -->
			<view class="flex px-8 w-full">
				<uni-segmented-control class="flex-1 self-end"
															 :current="index"
															 :values="segmented"
															 style-type="text"
															 @click-item="" />
			</view>
		</uni-nav-bar>
		<!-- 内容 -->
		<view class="main">
			<uni-swipe-action class="renters pt-3">
				<!--todo 卡片 -->
				<uni-swipe-action-item :right-options="actions"
															 @click=""
															 v-for="item in 5"
															 :key="item">
					<view class="pb-3 px-3">
						<view class="renters-item flex px-4 py-4 rounded-lg bg-white m-shadow">
							<view class="right basis-7/12 flex flex-col">
								<text class="renters-item__name mb-1 text-base font-semibold">
									老张
								</text>
								<text class="renters-item__phone text-sm text-gray-400">
									电话: 13568745219
								</text>
							</view>
							<view class="left basis-5/12 flex justify-start items-center">
								<view class="renters-item__tag mr-2 px-2 py-1 text-xs text-white bg-teal rounded-25">
									<text class="">{{ 1 }}号房</text>
								</view>
								<view class="renters-item__tag px-2 py-1 text-xs text-white bg-blue rounded-25">
									<text class="">租金:{{ 120 }}元</text>
								</view>
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
	'当前租客',
	'历史租客'
]
//#endregion

//#region 内容
const actions = [
	{
		text: '删除',
		style: {
			backgroundColor: 'rgba(0,0,0,0)',
			color: 'red'
		}
	}
]
//#endregion
</script>

<!-- <style lang="scss"></style> -->