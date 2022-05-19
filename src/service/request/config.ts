let BASE_URL = ''
const TIME_OUT = 5000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '开发环境'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '生产环境'
} else {
  BASE_URL = '测试环境'
}

export { BASE_URL, TIME_OUT }
