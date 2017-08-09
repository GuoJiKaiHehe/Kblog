<template>
	<div class="left-main">
		<div class="bowen-title">
			<div class="write fl">
				<a href="/write"><i class="fa fa-pencil fa-fw"></i>写博文</a>
			</div>
			<div class="draft fr">
				<a href="javascript:;">草稿<span class="num">0</span></a>
			</div>
		</div>
		<div class="bowen-wrap">
			<ul class="bowen-list">

				<li>
					<kBowen></kBowen>
				</li>
				<li >
					<k-bowen></k-bowen>

				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">

	import kBowen from './common/kBowen';
	export default{
		components:{
			kBowen
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
@import url("../../less/var.less");
	.bowen-title{
		height:60px;
		border-radius: 5px;
		box-shadow: 2px 2px 15px #ccc;
		line-height: 1.6;
		box-sizing:border-box;
		padding:20px;
		a{
			font-size:15px;
			color:#666;
			i{
				margin-right:5px;
			}
			&:hover{
				color:@lanse;
			}
		}
	}
	.bowen-wrap{
		margin-top:20px;
		.bowen-list{
			margin-bottom:20px;

		}
	}


</style>