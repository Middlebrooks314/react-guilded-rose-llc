import { useFetch } from "react-async"
const apiURL = "https://safe-wave-09726.herokuapp.com/api/v1"

class ApiHandler {
  getWelcomeString() {
    const { data, error } = useFetch("https://safe-wave-09726.herokuapp.com/api/v1/welcome", {
      headers: { accept: "application/json" }
    })
    if (error){
      return error.message
    } 
    else {
      return data
    }
  }

  getStoreItems() {
    const { data, error } = useFetch("https://floating-spire-59497.herokuapp.com/api/v1/items", {
      headers: { accept: "application/json" }
    })
    if (error) return error.message
    if (data) return data
  }

  getItemData(itemId) {
    const { data } = useFetch(`https://floating-spire-59497.herokuapp.com/api/v1/items/${itemId}`, {
      headers: { accept: "application/json" }
    })
    return data
  }
}
export default ApiHandler
