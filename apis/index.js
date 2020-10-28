// let baseUrl = 'https://iot.cn-shanghai.aliyuncs.com/'
import { timestamp} from '../utils/index.js'
export const _sign = params => {
	return uni.request({
		url: '', //仅为示例，并非真实接口地址。
		header: {
			'content-type': 'json' //自定义请求头信息
		}
	});
}