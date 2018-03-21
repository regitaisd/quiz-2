import Operator from '../../utils/model/operator/index';

import UserModel from '../../models/user/user.model';
import UserService from '../../services/user/user.service';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
	components: {
		'loading-panel': LoadingPanel,
		'error-panel': ErrorPanel,
		'toast': Toast
	},
	data() {
		return {
			message: 'Login',
			description: 'User Login',
			userConfig: {
				loading: true,
				error: false
			},
			user: UserModel,
			users: []
		}
	},
	/*mounted() {
		this.bindItems();
	},*/
	methods: {
		/*bindItems() {
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
		},*/
		storeUsers() {
			UserService.store(this, this.user)
			.then(
				res => {
					this.users.push(Operator.single(UserModel, res.body.data));
					localStorage.setItem('accessToken', 'Bearer ' + res.body.data.token);
					this.user = Operator.reset(UserModel);
					this.$router.push({ path: '/item' });
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot login');
					this.$refs.toast.show();
				}
			)
		}
		/*deleteUser(user) {
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
		},*/
		/*editItem(item) {
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
		}*/
	}
}