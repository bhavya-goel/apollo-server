import { RESTDataSource } from 'apollo-datasource-rest'
import { configuration } from '../config'
export default class TraineeApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = configuration.service_url
  }

  willSendRequest (request) {
    request.headers.set('Authorization', this.context.token)
  }

  async getTrainee () {
    const result = await this.get('trainee')
    return result
  }
}
