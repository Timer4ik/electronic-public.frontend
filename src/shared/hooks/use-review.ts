import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchReview(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getReviews(options)

    return response.data
}

