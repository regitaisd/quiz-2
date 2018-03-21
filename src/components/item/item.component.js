import Operator from '../../utils/model/operator/index';

import ItemModel from '../../models/item/item.model';
import ItemService from '../../services/item/item.service';

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
			message: 'Items',
			description: 'CRUD items',
			itemConfig: {
				loading: true,
				error: false
			},
			item: ItemModel,
			items: []
		}
	},
	mounted() {
		this.bindItems();
	},
	methods: {
		bindItems() {
			this.itemConfig.loading = true;
			this.itemConfig.error = false;

			ItemService.fetch(this)
			.then(
				 res => {
					this.items = Operator.map(ItemModel, res.body.data);
					this.itemConfig.loading = false;
				},
				 err => {
					this.itemConfig.loading = false;
					this.itemConfig.error = true;
				}
			);
		},
		storeItems() {
			ItemService.store(this, this.item)
			.then(
				res => {
					this.items.push(Operator.single(ItemModel, res.body.data));
					this.item = Operator.reset(ItemModel);
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot store');
					this.$refs.toast.show();
				}
			)
		},
		deleteItem(item) {
			ItemService.delete(this, item.id)
			.then(
				res => {
					this.items.splice(this.items.indexOf(item), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot delete');
					this.$refs.toast.show();
				}
			)
		},
		editItem(item) {
			this.items[this.items.indexOf(item)].onedit = true;
		},
		updateItem(item) {
			ItemService.update(this, item.id, item)
			.then(
				res => {
					this.items[this.items.indexOf(item)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot update');
					this.$refs.toast.show();
				}
			);
		}
	}
}