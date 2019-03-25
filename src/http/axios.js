/**
 * asiox 的封装
 */
import { BASE_URL } from './config'
import Axios from 'axios'
import { message } from 'antd'

const axios = Axios.create({
    baseURL: BASE_URL // api的base_url
})

axios.interceptors.request.use(
    config => {
        if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
            config.headers['Content-Type'] = 'application/json'
            if (config.type === 'form') {
                config.headers['Content-Type'] = 'multipart/form-data'
            } else {
                // 序列化
                config.data = JSON.stringify(config.data)
            }
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        const res = response.data
        // 处理response的示例，可根据实际自行更改
        if (res.success) {
            // 统一处理
            return res // 直接返回数据
        } else {
            message.error(res.msg) // 错误统一报出
            return Promise.reject(res)
        }
    },
    err => {
        message.error('请求出错！')
        return Promise.reject(err)
    }
)

export { axios }
