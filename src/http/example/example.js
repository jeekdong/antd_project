import { axios } from '../axios'

/**
 * 接口示例
 */
export const getSchemeUrl = config => {
    return axios.get('/api/example', {
        params: {
            ...config
        }
    })
}
