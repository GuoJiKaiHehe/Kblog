module.exports={
	PORT:process.env.PORT || '3000' ,

	//数据库管理配置；
	DATABASE_USER:'jikai',
	DATABASE_PASS:'978352',
	DATABASE_IP:'103.76.85.214',
	DATABASE_NAME:'myblog',
	DATABASE_URL:'mongodb://jikai:978352@103.76.85.214/myblog',
	avatarPath:"/images/avatar/",
	ADMIN_STATIC_PATH:'/lib/admin/',//后台模版静态文件路劲；
	upAvatarPath:__dirname+'/../public/images/avatar'
}