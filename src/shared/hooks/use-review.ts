import { IProductReview } from "../types/models";
import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchReview(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getReviews(options)

    return response.data
}
export async function createReview(data:Omit<IProductReview,"product_review_id">,options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.createReview(data,options)

    return response.data
}

