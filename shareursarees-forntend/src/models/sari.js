import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class SariModel {

	static getAllSaris(){
    
    let request = axios.get(`${REACT_APP_API_URL}/saris`)
    return request
  }
	
  static AddSari(data){
    let request=axios.post(`${REACT_APP_API_URL}/myshop/${data.userId}/sari`,data)
    return request
  }

  static getSariByUserId(data) {
		let request = axios.get(`${REACT_APP_API_URL}/myshop/${data.userId}/sari`, data)
    return request
    }
    
    static deleteSari(data){
      let request=axios.delete(`${REACT_APP_API_URL}/user/${data.userId}/saris/${data.sariId}`,data)
      return request
    }
}



