/**
 * Created by Administrator on 2016/4/5.
 */
module.exports = {
    path: 'login',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./../../components/login/Login'))
        })
    }
}
