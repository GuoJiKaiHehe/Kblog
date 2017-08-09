<template>
	<div class="me">
		<k-header></k-header>
		<div class="sys-container">
			<div class="side-left">
			<ul>
					<li><router-link to="/me"><i class="fa fa-paper-plane-o"></i>我的主页</router-link></li>
					<li><router-link :to="{name:'user'}"><i class="fa fa-user"></i>用户中心</router-link></li>
					<li><router-link to="/sys/sysBase"><i class="fa fa-cog fa-fw"></i>基本设置</router-link></li>
					<li><router-link to="/sys/myMsg"> <i class="fa fa-comment"></i>我的消息</router-link></li>
					
			</ul>
			</div>
			<div class="right-content">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
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


<style type="text/css" lang="less" scoped>
@import url("../../less/var.less");
body,html{
	overflow: hidden;
}
.me{
	height: 100%;
}

	.sys-container{
		display: flex;
		position: relative;
		top:55px;
		width: 1000px;
		margin:0 auto;
		text-align: left;
		height: 100%;
		.side-left{
			flex:0 0 200px;
			margin-right: 20px;
			width: 200px;
			box-sizing:border-box;
			padding:20px 0;
			background-color:#fff;
			box-shadow: 2px 2px 15px #ccc;
			font-size: 15px;
			border-radius:10px;
			height: 500px;
			li{
				
				&:hover{
					background-color:@lanse;
					a{
						color:#fff;
					}
				}
				height:44px;
				line-height: 44px;
				i{
					width:12px;
					height:12px;
					margin-right: 10px;
				}
			}
			.router-link-active{
				background-color:@lanse;
				color:#fff;
			}
			a{
				color:#666;
				display: block;
				padding:0 20px;
			}
		}
		.right-content{
			flex:1;
			box-shadow: 2px 2px 15px #ccc;
			box-sizing: border-box;
			padding:20px;
			height: 500px;
			border-radius: 8px;
		}
	}	

</style>