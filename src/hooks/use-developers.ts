import { useApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchDevelopers(options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getDevelopers(options)
    
    return response.data
}
