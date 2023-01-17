// Requiring module
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage' 



const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	}
]

// Create Vue Router Object
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
