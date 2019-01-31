import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index.vue'
import OrderList from '@/components/pages/orderList.vue'
import Detail from '@/components/pages/Detail.vue'
import Product1 from '@/components/detailComponents/Product1.vue'
import Product2 from '@/components/detailComponents/Product2.vue'
import Product3 from '@/components/detailComponents/Product3.vue'
import Product4 from '@/components/detailComponents/Product4.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/detail',
      name: 'detail',
      redirect: '/detail/pro1',
      component: Detail,
      children: [
        {path: 'pro1', component: Product1},
        {path: 'pro2', component: Product2},
        {path: 'pro3', component: Product3},
        {path: 'pro4', component: Product4}
      ]
    }
  ]
})
