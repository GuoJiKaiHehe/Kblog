<template>
	<div class="msg" :class="{'msg-right':$store.state.user.uid==msgdata.uid}">
		<div class="avatar">
			<img :src="msgdata.avatar" width="40" alt="">
		</div>
		<div class="msg-con">
			<div class="nick-time"><span class="nick">msgdata.nick</span> <span class="time">{{msgdata.time}}</span></div>
			<div class="text">
				{{msgdata.text}}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			msgdata:{
				type:Object
			}
		}
	}
</script>


<style type="text/css" lang="less" scoped>
	.msg{
		.avatar{
			float:left;
			margin-right:10px;
			img{
				vertical-align: -43px;
			}
		}
		.msg-con{
			.nick-time{
				.nick{
					margin-right: 10px;
					font-weight: bold;
				}
			}
			.text{
				background: #ccc;
				border:1px solid #ccc;
				border-radius: 8px;
				position: relative;
				display: inline-block;
				background: #fff;
				text-align: left;
				padding:6px 12px;
				max-width: 95%;
				min-height: 35px;
				margin-top: 10px;

			}
		}
	}
	.msg-right{
		text-align: right;
		.avatar{
			float:right;
			margin-left:10px;
		}
	}
</style>