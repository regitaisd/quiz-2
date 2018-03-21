import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.component.vue';
import HomeComponent from './components/home/home.component.vue';
import ItemComponent from './components/item/item.component.vue';
import UserComponent from './components/user/user.component.vue';
import RegisterComponent from './components/register/register.component.vue';

const routes = [
	{
		path : '/',
		component: HomeComponent
	},
	{
		path: '/item',
		component: ItemComponent
	},
	{
		path: '/login',
		component: UserComponent
	},
	{
		path: '/register',
		component: RegisterComponent
	}

];

const router = new Router({
	routes: routes
});

new Vue({
	router: router,
	render: h => h(AppComponent)
}).$mount('#app');