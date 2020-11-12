import Vue from 'vue'
import Router from 'vue-router'
import JobList from '@/components/JobList'
import JobDetail from '@/components/JobDetail'
import User from '@/components/User'
import Chat from '@/components/Chat'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Works from '@/components/test'
import Video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JobList',
      component: JobList
    },
    {
      path: '/job-list',
      name: 'JobList',
      component: JobList
    },
    {
      path: '/job-detail',
      name: 'JobDetail',
      component: JobDetail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
