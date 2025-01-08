import axios from "axios"


export const imgURL = (path: string, size: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f21eb20fe9efcb0421cc1456045018b1"
  }
})