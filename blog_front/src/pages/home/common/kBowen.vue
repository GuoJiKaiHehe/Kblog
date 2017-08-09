<template>

	<div class="bowen">
		<div class="title-cate">
			所属分类：<span class="cate">网页布局</span>
		</div>
		<div class="author-info">
			<span class="avatar"><img src="/static/images/avatar/default.jpg" width="22" alt=""></span>
			<span class="author">郭积开</span>
			<span class="author-intro">前端developer。i like it</span>
		</div>
		<div class="content">
			<h3 class="title">
				<a href="">有哪些近几年被 90 后、95 后追捧的新职业？</a>
			</h3>
			<div class="con">
				<div class="pic">
					<img src="/static/images/tu1.jpg" alt="">
				</div>
				<div class="text">
					泻药。感觉是码代码里碰到同性几率比较大的职业之一。
					如果你缺个会挣钱的女朋友，请来前端团队。
					如果你缺个可以帮你解决bug的女朋友，请做个后端，接口就是红线。
					如果你缺个既能微笑拿刀也会认真码字的女朋友，再不行做个产品测试，至少可以相爱相杀。<a href="javascript:;" class="show_all">查看全文<i class="fa fa-chevron-down"></i></a>
				</div>
			</div>
			<ul class="foot-tool">
				<li class="vote_up "><a href=""><i class="fa fa-thumbs-o-up"></i><span class="num">0</span></a></li>

				<li class="vote_down"><a href=""><i class="fa fa-thumbs-o-down"></i><span class="num">0</span></a></li>
				<li class="show_comments"><i class="fa fa-comment"></i><span class="num">0</span>条评论</li>
				<li class="eye"><i class="fa fa-eye"></i>观看</li>
				<li class="share"><i class="fa fa-share-alt"></i>分享</li>
				<li class="share"><i class="fa fa-heart-o"></i>收藏</li>
				<li>感谢</li>
			</ul>
		</div>
	</div>

</template>


<script type="text/javascript">
	
</script>




<style type="text/css" lang="less" scoped>
@import url('../../../less/var.less');
	.bowen{
		box-sizing:border-box;
		padding:20px;
		padding-bottom: 10px;
		border-radius:8px;
		box-shadow: 2px 2px 15px #ccc;
		text-align: left;
		
		.title{
			text-align: center;
			margin:15px auto;
			font-weight: bold;
			a{
				color:#333;
			}
		}
		.con{
			.pic{
				float:left;
				width:190px;
				height:105px;
				overflow: hidden;
				position: relative;
				margin-right:20px;
				img{
					width:100%;
					display: block;
				}
			}
			.text{
				
				font-size:15px;
				color:#666;
				.show_all{
					i{
						
					}
				}
			}
		}
		.author-info{
			margin:10px 0;
			font-size: 0;
			span{
				font-size: 13px;
				padding-top:3px;
			}
			.author{
				margin-left:10px;
				font-weight: bold;
			}
			.author-intro{
				color:#333;
				margin-left: 10px;
			}
			img{
				vertical-align: middle;

			}
		}
		.foot-tool{
			height: 40px;
			display: flex;
			text-align: center;
			line-height: 40px;
			margin-top:10px;
			li{
				i{
					margin-right:10px;
				}
				flex:1;
				a{
					display: block;
					&:hover{
						color:@lanse;
					}
				}
			}
		}
	}

</style>