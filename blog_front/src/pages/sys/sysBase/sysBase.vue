<template>
	<div class="sysBase">
		<ul class="link-list">
			<router-link tag="li" :to="{name:'mydata'}">我的资料</router-link>
			<router-link tag="li"  :to="{name:'avatar'}">头像</router-link>
			<router-link tag="li"  :to="{name:'pass'}">密码</router-link>
			<router-link tag="li"  :to="{name:'bind'}">帐号绑定</router-link>
		</ul>
		<div class="content">
			<transition mode="out-in" name="fade">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script type="text/javascript">
import headTab from '../common/headTab.vue';

	export  default {
		name:"sysBase",
		components:{
			headTab
		},
		data(){
			return {
				// nowIndex:0,
				tabData:[
					{text:'我的资料'},
					{text:'头像'},
					{text:'密码'},
					{text:'帐号绑定'}
				],
				
				rules:{

				}
				
			}
		},
		methods:{
			setIndex(k){
				this.nowIndex=k;
			}
			
		}
	}
</script>


<style type="text/css" lang="less">
@import url("../../../less/var.less");
	.sysBase{
		.link-list{
			height:40px;
			border-bottom: 1px solid  #ccc;
			line-height: 40px;
			li{
				display: inline-block;
				font-size: 14px;
				padding:0 10px;
				cursor: pointer;
				text-align: center;
				&.router-link-active{
					color:@lanse;
					position: relative;
					/* &:after{
						content: " ";
						display: block;
						position:absolute;
						bottom: -1px;
						width: 100%;
						height:2px;
						background: @lanse;
					} */
				}
				&:hover{
					color: @lanse;
				}

			}
		}
		.content{
			margin-top: 20px;
			
		}
	}


</style>