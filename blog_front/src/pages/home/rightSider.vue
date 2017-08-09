<template>
	<div class="right-sider clear">
		<div class="cate-list clear">
			<ul class=" clear">
				<li><a href="javascript:;">
					Js
				</a></li>
				<li><a href="javascript:;">
					Node
				</a></li>
				<li><a href="javascript:;">
					Express
				</a></li>
				<li><a href="javascript:;">
					Koa
				</a></li>
				<li><a href="javascript:;">
					PHP
				</a></li>
				<li><a href="javascript:;">
					React Native
				</a></li>
				<li><a href="javascript:;">
					Nginx
				</a></li>
			</ul>
		</div>
		<div class="about-me-wrap">
			<ul class="about-me clear">
				<li><i class="fa fa-heart-o"></i><a href="javascript:;">我的收藏</a></li>
				<li><i class="fa fa-question"></i><a href="javascript:;">我关注的问题</a></li>
				<li><i class="fa fa-group"></i><a href="javascript:;">社区服务中心</a></li>
				<li><i class="fa fa-edit"></i><a href="javascript:;">公共编辑动态</a></li>
				<li><i class="fa fa-copyright"></i><a href="javascript:;">版权服务中心</a></li>
				<li><i class="fa fa-user-o"></i><a href="javascript:;">关于我</a></li>
			</ul>
		</div>
	</div>

</template>

<script type="text/javascript">
	
</script>



<style type="text/css" lang="less">
@import url('../../less/var.less');
.about-me-wrap{
	margin:15px 0;

}
.about-me{
	border:1px solid #ccc;
	border-radius: 8px;
	background: #fff;
	padding:20px;
	text-align: left;
	box-shadow: 2px 2px 15px #ccc;
	li{
		height:30px;
		line-height: 30px;
		font-size:15px;
		a{
			color:#666;
			padding-left:10px;
			&:hover{
				color:@lanse;
			}
			
		}
	}
}


.cate-list{
	box-sizing:border-box;
	padding:20px;
	border:1px solid #ccc;
	border-radius:10px;
	box-shadow: 2px 2px 20px #ccc;
	ul{
		li{
			float:left;
			margin:9px;
			padding:4px 10px;
			border-radius: 5px;
			border:1px solid #ccc;
			a{
				color:#666;
				&:hover{
					color:@lanse;
				}
			}
		}
	}
}
</style>
