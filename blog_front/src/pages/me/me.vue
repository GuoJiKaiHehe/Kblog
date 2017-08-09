<template>
	<div class="me">
		<k-header></k-header>
		<div class="container home-page">
			<div class="info">
				<div class="name">guojikai</div>
				<div class="from">来自阳江</div>
				<div class="personal-write">
					前端developer。i like it
				</div>
			</div>
			<div class="content">
				<dl class="history-bowen history">
					<dt>最近发表的博文</dt>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
				</dl>
				<dl class="history-article history">
					<dt>最近发表的文章</dt>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
					<dd>有哪些近几年被 90 后、95 后追捧的新职业？ <span class="time">201702323</span></dd>
				</dl>
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


<style type="text/css" lang="less">
	.home-page{
		position:relative;
		top:50px;
		padding-top:20px;
		width:1000px;
		margin:0 auto;
		.info{
			height:200px;
			border:1px solid #ccc;
			border-radius: 10px;
			box-shadow: 2px 2px 15px #ccc;
			margin-bottom: 20px;
			.name{
				margin-top:60px;
				font-size: 30px;
				font-weight: bold;
			}
			& > div{
				line-height: 2;
			}
		}
		.content{
			text-align: left;
			.history-bowen{
				width:49%;
				float:left;

			}
			.history-article{
				float:right;
				width:49%;
			}
			dt{
				height:40px;
				border-bottom: 1px solid #ccc;
				line-height: 2;
				font-weight: 600;
				font-size: 15px;
				text-align: center;
			}
			dd{
				list-style: none;
				display: inline-block;
				width: 100%;
				margin:0;
				padding: 0;
				line-height: 30px;
				height: 30px;
				font-size: 14px;

				.time{
					display: inline-block;
					float:right;
				}
			}
			.history{
				border:1px solid #ccc;
				border-radius: 8px;
				padding: 20px;
				box-sizing: border-box;
				min-height: 300px;
				box-shadow: 2px 2px 15px #ccc;
			}
		}
	}
</style>