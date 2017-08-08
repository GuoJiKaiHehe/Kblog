<template>
	<div class="header">
		<div class="header-container clear">
			<div class="logo">
				<img src="/static/images/logo_blue.png" alt="logo">
			</div>
			<ul class="nav">
				<li v-for="(nav,k) in navs">
				<router-link :to="{path:nav.url}" :class="{'active':nav.url==$route.path}">{{nav.name}}</router-link>
				</li>
			</ul>
			<div class="search-box">
				<el-input placeholder="请输入搜索内容"
					  icon="search"
					  v-model="search_text"
					  :on-icon-click="handleSearch">
			</el-input>
			</div>
			<ul class="logined info" v-if="isLogin">
				<li class="msg"><i class="fa fa-comments"></i></li>
				<li class="msg"><i class="fa fa-assistive-listening-systems"></i></li>
				<li class="username"><a href="javascript:;"><i class="fa fa-user fa-fw"></i>{{userInfo.name}}</a></li>
				<li class="avatar"><img src="/static/images/avatar/default.jpg" width="33"  alt="logo"></li>
			</ul>
			<ul v-else class="notlogin info">
				<li><a href="javascript:;">登录</a></li>
				<li><a href="javascript:;">注册</a></li>
			</ul>
		</div>
	</div>

</template>

<script type="text/javascript">
	export default{
		name:"header",
		data(){
			return{
				isLogin:true,
				userInfo:{
					name:"guojikai"
				},
				search_text:'',
				// curNav:''
				navs:[
					{
						name:"首页",
						url:"/",
					},
					{
						name:"聊天室",
						url:"/chat",
					},
					{
						name:"游戏",
						url:"/game",
					},
					{
						name:"文章",
						url:"/article",
					}
				]
			}
		},
		methods:{
			handleSearch(){

			}
		}

	}
</script>


<style lang="less">
@import url('../less/var.less');
	.header{
		height:50px;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top:0;
		width:100%;
		.header-container{
			width:1000px;
			margin:0 auto;
			padding-top:8px;
		}
		.logo{
			float:left;
			width:40px;
			
			img{
				width:100%;
			}
		}
		.nav{
			float:left;
			li{
				float:left;
				line-height: 33px;
				padding:0 10px;
				a{
					color:#666;
					display: block;
					font-size:15px;


					&.active{
						color:@lanse;

					}
					&hover{
						color:@lanse;
					}
				}
			}
		}
		.search-box{
			float:left;
			margin-left:20px;
		}
		.info{
			float:left;
			li{
				float:left;
				font-size: 22px;
				color:#666;
				padding:0 10px;
				img {
					border-radius: 10px;
					overflow: hidden;
				}
				a{
					color:#666;
				}
				i{

				}
			}
		}
	}


</style>