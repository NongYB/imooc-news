<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
		
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	//easyCom components/组件名/组件名.vue 局部引入
	//import navbar from '../../../components/navbar/navbar.vue'
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				tabList:[],
				 tabIndex:0,
				 activeIndex:0
			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		watch:{
			userinfo(newVal){
				this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange',(res)=>{
				this.tabList=[]
				this.tabIndex=0
				this.activeIndex=0
				this.getLabel()
			})
			
		},
		methods: {
			change(current){
				this.tabIndex=current
				this.activeIndex=current
				//console.log('当前swiper的值',current);
			},
			tab({data,index}){
				this.activeIndex=index
				//console.log(data,index);
			},
			getLabel(){
				
				//console.log(this.$api);
				this.$api.get_label().then((res)=>{
					//console.log(res)
					const {data}=res
					//console.log('标签',data);
					data.unshift({
						name:'全部'
					})
					this.tabList=data
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		// border: 1px solid red;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
		}
	
	
</style>
