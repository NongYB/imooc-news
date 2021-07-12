<template>
	<view class="listauthor">
		<view class="listauthor-image">
			<image :src="item.avatar" mode="aspectFill"></image>
		</view>
		<view class="listauthor-content">
			<view class="listauthor-content_title">
			{{item.author_name}}
			<button class="listauthor-content_button" @click="follow(item.id)">取消关注</button>
			</view>
			
			<view class="listauthor-content_des">
				<view class="listauthor-content_des-label">{{item.professional}}</view>
				<view class="listauthor-content_des-info">
					
					<text>发帖 {{item.article_ids.length}}</text>
					<text>粉丝 {{item.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-author",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		
		data() {
			return {
				
			};
		},
		methods:{
			follow(author_id){
				this.setUpdateAuhtor(author_id)
			},
			//关注作者
			setUpdateAuhtor(author_id){
				uni.showLoading()
				this.$api.update_author({
					author_id
				}).then(res=>{
					uni.hideLoading()
					uni.$emit('update_author')
					uni.showToast({
						title:'取消关注作者',
						icon:'none'
					})
				})
			},
		}
	}
</script>

<style lang="scss">
	.listauthor{
		display: flex;
		padding: 10px 0;
		margin: 0 10px;
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F5F5;
		.listauthor-image{
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.listauthor-content{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			.listauthor-content_title{
				display: flex;
				justify-content: space-between;
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
				.listauthor-content_button{
					position: absolute;
					right: 0;
					top: -6px;
					flex-shrink: 0;
					height: 30px;
					font-size: 10px;
					color: #fff;
					font-weight: normal;
					background-color: $mk-base-color;
				}
			}
			
			.listauthor-content_des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				margin-top: 10px;
				.listauthor-content_des-label{
					color: #666;
					
				}
				.listauthor-content_des-info{
					color: #999;
					line-height: 1.5;
					text:first-child{
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
