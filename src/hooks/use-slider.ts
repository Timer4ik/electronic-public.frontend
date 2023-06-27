import { useApi } from "./use-api"
import { AxiosRequestConfig } from "axios"

export async function fetchSliders(options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getSliders(options)

    return response.data
}
