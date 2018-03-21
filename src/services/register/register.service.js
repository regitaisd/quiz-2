import Config from '../config';
export default{
	url:Config.api + '/register',
 	store(v, params){
  		return v.$http.post(this.url, params);
 	}
}