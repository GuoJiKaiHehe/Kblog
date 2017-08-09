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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> front_vue
				<li class="username"><a href="javascript:;"><i class="fa fa-user fa-fw"></i>{{userInfo.name}}</a></li>
				<li class="avatar"><img src="/static/images/avatar/default.jpg" width="33"  alt="logo"></li>
			</ul>
			<ul v-else class="notlogin info">
<<<<<<< HEAD
=======
=======
				<li class="username">{{userInfo.name}}</li>
				<li class="avatar">
					<img src="/static/images/avatar/default.jpg" @click.stop="showsubnav" width="33"  alt="logo">
					<ul class="subnav" v-show="isShowSubNav">
						<li @click.stop="stopPropa"><router-link :to="{path:'/me'}" >个人主页</router-link></li>
						<li @click.stop="stopPropa"><i class="fa fa-cog fa-fw"></i><router-link :to="{path:'/sys'}">系统设置</router-link></li>
						<li @click.stop="stopPropa"><a href="javascript:;">退出</a></li>
					</ul>
				</li>
			</ul>
			<ul class="notlogin info" v-else >
>>>>>>> usera
>>>>>>> front_vue
				<li><a href="javascript:;">登录</a></li>
				<li><a href="javascript:;">注册</a></li>
			</ul>
		</div>
	</div>

</template>

<script type="text/javascript">
	export default{
		name:"header",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
		mounted(){
			var _this=this;
			document.onclick=function(e){
				e.stopPropagation();
				_this.isShowSubNav=false
			}
		},
>>>>>>> usera
>>>>>>> front_vue
		data(){
			return{
				isLogin:true,
				userInfo:{
					name:"guojikai"
				},
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
				isShowSubNav:false,
>>>>>>> usera
>>>>>>> front_vue
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
			},
			showsubnav(){
				this.isShowSubNav=!this.isShowSubNav;
			},
			stopPropa(e){
				e.stopPropagation();
>>>>>>> usera
>>>>>>> front_vue
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
		background-color: #fff;
		z-index: 99;
>>>>>>> usera
>>>>>>> front_vue
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
<<<<<<< HEAD
				padding:0 10px;
=======
<<<<<<< HEAD
				padding:0 10px;
=======
				padding:0 20px;
>>>>>>> usera
>>>>>>> front_vue
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
<<<<<<< HEAD
			float:left;
=======
<<<<<<< HEAD
			float:left;
=======
			float:right;
			margin-left:20px;
>>>>>>> usera
>>>>>>> front_vue
			li{
				float:left;
				font-size: 22px;
				color:#666;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> front_vue
				padding:0 10px;
				img {
					border-radius: 10px;
					overflow: hidden;
<<<<<<< HEAD
=======
=======
				padding:0 20px;
				img {
					border-radius: 10px;
					overflow: hidden;
					cursor: pointer;
>>>>>>> usera
>>>>>>> front_vue
				}
				a{
					color:#666;
				}
				i{

				}
			}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
			.avatar{
				position: relative;
				.subnav{
					position:absolute;
					background-color:#fff;
					border:1px solid #ccc;
					border-radius:8px;
					box-shadow: 2px 2px 15px #ccc;
					top:50px;
					width:100px;
					left:-25%;
					&:before{
						content: " ";
						display: block;
						position: absolute;
						height:0px;
						width:0px;
						border:10px solid #fff;
						border-left-color:transparent  ;
						border-right-color: transparent;
						border-top-color: transparent;
						top:-20px;
						left:50%;
					
						margin-left:-10px;
						
						
					}
					li{
						display: block;
						font-size:13px;
						padding:0;
						margin:0;
						line-height:2;
						float:none;
						height:30px;

					}
				}
			}
>>>>>>> usera
>>>>>>> front_vue
		}
	}


</style>