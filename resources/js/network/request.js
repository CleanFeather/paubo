import axios from 'axios';

export const request = config => {console.log(this);
    let instance = axios.create({
        baseURL: 'api',
        timeout: 5000,
        headers: {
            'Authorization': localStorage.getItem('access_token')
        }
    })
    instance.interceptors.response.use(response => {
        if ('authorization' in response.headers){
            localStorage.setItem('access_token',response.headers.authorization);
        }
        return response;
    },error => {
        if (error.response.status == 401){
            _app.$message.error('登录已超时，请重新登录');
            _app.$router.push({name: 'login'});
        }
        return Promise.reject(error);
    });
    return instance(config);
};