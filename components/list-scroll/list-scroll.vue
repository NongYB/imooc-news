<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y="true" @scrolltolower="loadmore">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		},
		methods:{
			loadmore(){
				// console.log('触发上拉事件')
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.scroll{
		height: 100%;
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
			//border:1px solid red;
		}
		}
</style>
