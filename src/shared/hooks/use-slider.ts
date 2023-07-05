import { appApi } from "./use-api"
import { AxiosRequestConfig } from "axios"

export async function fetchSliders(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getSliders(options)

    return response.data
}
