import Operator from '../../utils/model/operator/index';

import RegisterModel from '../../models/register/register.model';
import RegisterService from '../../services/register/register.service';

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
			message: 'Register',
			description: 'Register user',
			registerConfig: {
				loading: true,
				error: false
			},
			register: RegisterModel,
			registers: []
		}
	},
	methods: {
		storeRegister() {
			RegisterService.store(this, this.register)
			.then(
				res => {
					this.registers.push(Operator.single(RegisterModel, res.body.data));
					localStorage.setItem('accessToken', 'Bearer ' + res.body.data.token);
					this.register = Operator.reset(RegisterModel);
					this.$router.push({ path: '/login' });
				},
				err => {
					this.$refs.toast.setMessage('Error, cannot register');
					this.$refs.toast.show();
				}
			)
		}
	}
}