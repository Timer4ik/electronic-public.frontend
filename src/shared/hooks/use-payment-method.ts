import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchPaymentMethods(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getPaymentMethod(options)
    
    return response.data
}
