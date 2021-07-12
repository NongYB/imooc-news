<template>
	<view>
		<view class="no-data" v-if="myArticleShow">
			暂无关注作者
		</view>
		<uni-load-more v-if="lists.length ===0 && !this.myArticleShow" status="loading"></uni-load-more>
		<list-card v-for="item in lists" :key="item.id" :item="item"></list-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				myArticleShow:false
			}
		},
		onLoad() {
			this.getMyArticle()
		},
		methods: {
			getMyArticle(){
				this.$api.get_my_article().then(res=>{
					//console.log(res);
					const {data}=res
					this.lists=data
					this.myArticleShow=this.lists.length===0?true:false
				})
			}
		}
	}
</script>

<style lang="scss">
	.no-data{
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
