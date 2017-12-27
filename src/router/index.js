import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import User from '@/components/user/User';
import UserHome from '@/components/user/UserHome';
import UserProfile from '@/components/user/UserProfile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '',
          component: UserHome
        },
        {
          path: 'profile',
          component: UserProfile
        }
      ]
    }
  ]
});
