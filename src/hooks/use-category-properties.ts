import { useApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchCategoryProperties(options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getCategoryProperties(options)
    
    return response.data
}
