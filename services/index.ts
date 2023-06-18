import Craft from "@/models/Craft"
import axios from "axios"

class Services {
  http = axios.create({
    baseURL: process.env.apiUrl
  })

  async getCrafts() {
    try {
      const response = await this.http.get<Craft[]>('/craft')

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

}

const service = new Services()
export default service
