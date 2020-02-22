//抽出路由组件
import VueRouter from "vue-router";
import homeContainent from './components/tarbar/homeContainent.vue'
import searchContainent from'./components/tarbar/searchContainent.vue'
import shopcarContainent from'./components/tarbar/shopcarContainent.vue'
import memberContainernt from'./components/tarbar/memberContainent.vue'



var router=new VueRouter({
    routes:
        [//路由规则
            {path: '/',redirect:'/home'},
            {path:'/home',component:homeContainent},
            {path:'/shopcar',component:shopcarContainent},
            {path:'/member',component:memberContainernt},
            {path:'/search',component:searchContainent}


        ],
    linkActiveClass:'mui-active'//覆盖选择高亮类，
})

export default router//暴露路由对象