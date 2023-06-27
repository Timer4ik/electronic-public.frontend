import { useApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchCategories(options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getCategories(options)
    
    return response.data
}
