<template>
	<div class="chat">
		
		<div class="left-box">
			<div class="tool-wrap">
				<tool></tool>
			</div>
			<div class="user-list-wrap">
				<user-list></user-list>
			</div>
		</div>
		<div class="right-box">
			<div class="chat-main">
				<div class="title">xxx群名</div>
				<div class="main">
					<div class="chatarea">
						<div class="msg-container">
							<div class="msg-wrap" v-for="(item,k) in msgs">
								<msg :msgdata="item"></msg>
							</div>
						</div>
						

						<div class="input-bar">
							<div class="biaoqing"><i class="fa fa-file-picture-o"></i></div>
							<div class="pic"><i class="fa fa-smile-o"></i></div>
							<div class="input-text-box">
								<el-input type="text" >
								</el-input>
								<el-button type="primary">
									发送
								</el-button>
							</div>
						</div>
					</div>
					<div class="notice">
						<h4>群公告</h4>
						<p>欢迎提出意见和建议；程序员学习社区</p>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';

import userList from './common/UserList.vue';

import tool from './common/tool.vue';

import msg from './common/msg.vue';
export default{
	name:"chat",
	components:{
		kHeader,
		userList,
		tool,
		msg
	},
	data(){
		return{
			msgs:[
				{
					uid:1,
					text:"11111",
					time:232341,
					nick:"guojikai",
					avatar:"/static/images/avatar/default.jpg"
				},
				{
					uid:2,
					text:"2222",
					time:232341,
					user:"admin",
					avatar:"/static/images/avatar/default.jpg"
				},
				{
					uid:1,
					text:"11111",
					time:232341,
					nick:"guojikai",
					avatar:"/static/images/avatar/default.jpg"
				},
				{
					uid:2,
					text:"2222",
					time:232341,
					user:"admin",
					avatar:"/static/images/avatar/default.jpg"
				}
			]
			
		}
	},
	methods:{
		
	}
}

</script>


<style type="text/css" lang="less">

html,body,.chat,.left-box{
 overflow: hidden;
	height: 100%;

}	
.chat{
	position: relative;
	display: flex;

	.left-box{
		position: relative;
		width:250px;
		float:left;
		flex:0 0 250px;
		display: flex;
		.tool-wrap{
			width:60px;
			text-align: center;
			
			float:left;
			height:100%;
			flex:0 0 60px;
			
		}
		.user-list-wrap{
			flex:1;
			float:left;
			
			
		}
	}
	.right-box{
		border-left: 1px solid #ccc;
		float:left;
		margin-left:20px;
		box-sizing: border-box;
		padding:20px;
		width: 100%;
		height: 100%;
		text-align: left;
		.chat-main{
			height:100%;
			.title{
				height:50px;
				line-height: 50px;
				font-size: 15px;
				padding-left:20px;
				border-bottom: 1px solid #ccc;
				margin-bottom: 10px;
				position: fixed;
				top:0;
				background: #fff;
				z-index: 99;
				width: 100%;
			}
			.main{
				position: relative;
				top:30px;
				display: flex;
				height:100%;
				.chatarea{
					display: flex;
					flex-direction:column;
					overflow: hidden;
					background: #d9d9d9;
					flex:1;
					height:100%;
					box-sizing: border-box;
					padding:10px;
					position: relative;

					.input-bar{
						position: absolute;
						bottom:20px;
						width:100%;
						display: flex;
						left:0px;
						.biaoqing{
							flex:0 0 50px;
							font-size:25px;
							text-align: center;
						}
						.pic{
							flex:0 0 50px;
							font-size:25px;
							text-align: center;
						}
						.input-text-box{
							display: flex;
							flex:1;
						}
					}

				}
				.notice{
					width:240px;
					flex:0 0 240px;
					box-sizing: border-box;
					padding:15px;
				}
			}
		}
	}
}

.msg-wrap{
	margin:10px 0;
}
</style>