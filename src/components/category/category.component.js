import Operator from '../../utils/model/operator/index';

import CategoryModel from '../../models/category/category.model';
import CategoryService from '../../services/category/category.service';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

export default {
	components: {
		'loading-panel': LoadingPanel,
		'error-panel': ErrorPanel,
		'toast': Toast
	},
	data() {
		return {
			message: 'Categories',
			description: 'CRUD category',
			categoryConfig: {
				loading: true,
				error: false
			},
			category: CategoryModel,
			categories: []
		}
	},
	mounted() {
		this.bindCategory();
	},
	methods: {
		bindCategory() {
			this.categoryConfig.loading = true;
			this.categoryConfig.error = false;

			CategoryService.fetch(this)
			.then(
				 res => {
					this.categories = Operator.map(CategoryModel, res.body.data);
					this.categoryConfig.loading = false;
				},
				 err => {
					this.categoryConfig.loading = false;
					this.categoryConfig.error = true;
				}
			);
		},
		storeCategory() {
			CategoryService.store(this, this.category)
			.then(
				res => {
					this.categories.push(Operator.single(CategoryModel, res.body.data));
					this.category = Operator.reset(CategoryModel);
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot store');
					this.$refs.toast.show();
				}
			)
		},
		deleteCategory(category) {
			CategoryService.delete(this, category.id)
			.then(
				res => {
					this.categories.splice(this.categories.indexOf(category), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot delete');
					this.$refs.toast.show();
				}
			)
		},
		editCategory(category) {
			this.categories[this.categories.indexOf(category)].onedit = true;
		},
		updateCategory(category) {
			CategoryService.update(this, category.id, category)
			.then(
				res => {
					this.categories[this.categories.indexOf(category)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot update');
					this.$refs.toast.show();
				}
			);
		}
	}
}