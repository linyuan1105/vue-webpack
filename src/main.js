import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/js/bootstrap.min';
import Vuex from 'vuex';
import product_data from './product.js';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
// 数组排重
function getFilterArray (array) {
    const res = [];
    const json = {};
    for (let i = 0; i < array.length; i++){
        const _self = array[i];
        if(!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}
/*vuex状态管理器*/
const store = new Vuex.Store({
    state: {
        productList: [],/*商品列*/
        cartList: [],/*购物车列*/
		login:[]/*登录数据*/
    },
    getters: {
        brands: state => {
            const brands = state.productList.map(item => item.brand);/*获取商品品牌名*/
            return getFilterArray(brands);
        },
        colors: state => {
            const colors = state.productList.map(item => item.color);
            return getFilterArray(colors);
        }
    },
    mutations: {
        // 添加商品列表data即product_data,将数据传入state的productList此时商品
		//数据取得
        setProductList (state, data) {
            state.productList = data;
        },
        // 添加到购物车
        addCart (state, id) {
            // 先判断购物车是否已有，如果有，数量+1
            const isAdded = state.cartList.find(item => item.id === id);
            if (isAdded) {
                isAdded.count ++;
            } else {
                state.cartList.push({
                    id: id,
                    count: 1
                })
            }
        },
        // 修改商品数量
        editCartCount (state, payload) {
			//找到对应的产品
            const product = state.cartList.find(item => item.id === payload.id);
			//根据传过来的count调整产品的数量
            product.count += payload.count;
        },
        // 删除商品
        deleteCart (state, id) {
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index, 1);
        },
        // 清空购物车
        emptyCart (state) {
            state.cartList = [];
        }
    },
    actions: {
        // 请求商品列表
        getProductList (context) {
            // 真实环境通过 ajax 获取，这里用异步模拟
            setTimeout(() => {/*调用setProductList,传入参数product_data*/
                context.commit('setProductList', product_data);
            }, 500);
        },
        // 购买
        buy (context) {
            // 真实环境应通过 ajax 提交购买请求后再清空购物列表
            return new Promise(resolve=> {
                setTimeout(() => {
                    context.commit('emptyCart');
                    resolve();
                }, 500)
            });
        }
    }
});













new Vue({
    el: '#app',
    router: router,
	store: store,
    render: h => h(App)
});
