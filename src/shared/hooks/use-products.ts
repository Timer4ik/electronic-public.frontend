import { IProduct } from "@/shared/types/models";
import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"

export async function fetchProductById(id: number, options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getProductById(id,options)

    return response.data
}
export async function fetchProducts(options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getProducts(options)

    return response.data
}

// export async function fetchProducts(options: AxiosRequestConfig<any>) {

//     const Api = appApi()

//     const response = await Api.getProducts(options)

//     // if (!response.ok) {
//     //     // This will activate the closest `error.js` Error Boundary
//     //     throw new Error('Failed to fetch data');
//     // }

//     return response.data
// }
