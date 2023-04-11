import axios from "axios"

type Options = {
    params?: any,
    method?: "get" | "post" | "put" | "delete" | "patch",
    body?: any
}

const BASE_URL = "http://localhost:5000"

export const baseRequest = async (url: string, options?: Options) => {
    return await axios.request({
        baseURL: BASE_URL,
        url: url,
        params: options?.params,
        data: options?.body
    })
}

