import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchReceiveMethods(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getReceiveMethod(options)
    
    return response.data
}
