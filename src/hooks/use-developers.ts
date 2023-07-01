import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchDevelopers(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getDevelopers(options)
    
    return response.data
}
