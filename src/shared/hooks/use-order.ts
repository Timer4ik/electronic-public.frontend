import { IOrder, IOrderProduct } from "@/shared/types/models";
import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchOrders(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getOrder(options)

    return response.data
}
export async function createOrder(body: Omit<IOrder,"order_id">, options?: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.createOrder(body, options)

    return response.data
}
export async function addOrderProduct(body: Omit<IOrderProduct,"order_product_id">, options?: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.createOrderProduct(body, options)

    return response.data
}
