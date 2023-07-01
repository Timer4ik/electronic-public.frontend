import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchCategoryProperties(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getCategoryProperties(options)
    
    return response.data
}
