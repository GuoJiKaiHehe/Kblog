<template>
	<div class="me">
		<k-header></k-header>
		<div class="side-left">
			<ul>
				<li><router-link to="/me">我的首页</router-link></li>
				<li><router-link to="/user">用户中心</router-link></li>
				<li><router-link to="/base">基本设置</router-link></li>
				<li><router-link to="/msg">我的消息</router-link></li>
				
			</ul>
		</div>
		<div class="right-content">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>	
</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';
export default{
	name:"me",
	components:{
		kHeader
	},
	data(){
		return{

		}
	},
	methods:{
		
	}
}

</script>


<style type="text/css" lang="less">
	
</style>