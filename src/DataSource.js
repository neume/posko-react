import axios from 'axios'
import config from './config'

export default class DataSource {
  static getUsers() {
    return axios({
      method: 'get',
      url: `${config.url}/users`,
      withCredentials: true
    })
    .then((result) => {
      return result.data.users
    })
  }

  static async getProducts() {
    let result = await axios({
      method: 'get',
      url: `${config.url}/products`,
      withCredentials: true
    })
    .then((result) => {
      return result.data.products
    })
    return result
  }
}
