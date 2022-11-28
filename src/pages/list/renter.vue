<template>
	<view class="renter-list">
		<!-- 导航 -->
		<view class="top">
			<uni-nav-bar left-icon="left" statusBar @clickLeft="navBack">
				<uni-segmented-control class="segmented" :current="0" :values="segmenteds" styleType="text" @clickItem="fun" />
			</uni-nav-bar>
		</view>
		<!--todo 列表 -->
		<uni-swipe-action ref="swipeAction">
			<uni-swipe-action-item class="mt-2" v-for="item in 5" :right-options="actions" :key="item">
				<view class="content-box">
					<uni-section class="rounded-md shadow-lg" title="老张" subTitle="电话：15975685135" titleFontSize="32rpx">
						<template #right>
							<uni-tag class="mr-2" text="2号房" type="success" circle />
							<uni-tag text="租金：500元" type="primary" circle />
						</template>
					</uni-section>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const segmenteds = [
	'当前租客',
	'历史租客'
]

const index = ref(0)
const fun = ({ currentIndex }) => {
	index.value = currentIndex
}

const interval = 2000
const duration = 100

const actions = [
	{
		text: '置顶',
		// style: { backgroundColor: 'green', }
	},
	{
		text: '删除',
		style: { backgroundColor: 'rgb(255,58,49)', }
	}
]

const navBack = () => {
	uni.navigateBack({
		delta: 1,
		animationDuration: 50
	})
}
</script>

<style lang="scss" scoped>
.renter-list {
	@apply flex flex-col h-screen;

	.top {
		@apply shadow-sm;

		.segmented {
			@apply px-8 w-full translate-y-2;
		}
	}

	.swiper {
		@apply flex-1;

		.swiper-item {
			@apply w-screen h-screen;

			.content-box {
				@apply px-2;
			}
		}
	}
}
</style>
