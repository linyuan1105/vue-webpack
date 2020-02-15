const routers = [
    {
        path: '/',
        meta: {
            title: '首页导航栏'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
	
	{
	    path: '/nav',
	    meta: {
	        title: 'Iview导航栏'
	    },
	    component: (resolve) => require(['./views/nav.vue'], resolve)
	},
	{
	    path: '/bootstrap',
	    meta: {
	        title: '首页'
	    },
	    component: (resolve) => require(['./views/index_bootstrap.vue'], resolve)
	},
	{
	    path: '/test',
	    meta: {
	        title: 'test'
	    },
	    component: (resolve) => require(['./views/test.vue'], resolve)
	},
	{
	    path: '/login',
	    meta: {
	        title: '登录'
	    },
	    component: (resolve) => require(['./views/login.vue'], resolve)
	},
	{
	    path: '/register',
	    meta: {
	        title: '注册'
	    },
	    component: (resolve) => require(['./views/register.vue'], resolve)
	},
	{
	    path: '/cart',
	    meta: {
	        title: '购物车'
	    },
	    component: (resolve) => require(['./views/cart.vue'], resolve)
	},
	{
	    path: '/product/:id',
	    meta: {
	        title: '商品详情'
	    },
	    component: (resolve) => require(['./views/product.vue'], resolve)
	},
	{
		path:'/amchart',
		meta:{
			title:'图表展示'
		},
		component: (resolve) => require(['./views/amchart.vue'], resolve)
	}
	
];
export default routers;