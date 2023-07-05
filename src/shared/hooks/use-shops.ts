import { IProduct } from "@/shared/types/models";
import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchShops(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getShops(options)

    return response.data
}

