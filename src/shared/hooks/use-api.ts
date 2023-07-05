import { GetMethod, ICategory, ICategoryProperty, IDeveloper, IProduct, IShop, ISlider, IOrder, PaymentMethod, ResponseData, IOrderProduct, IProductReview } from "@/shared/types/models"
import axios, { AxiosRequestConfig } from "axios"

export const appApi = () => {

    const API_URL = "http://localhost:5000"

    const baseFetch = <T>(url: string, options: AxiosRequestConfig<any>) => {
        return axios.request<T>({
            ...options,
            url: API_URL + url,
            params: options.params,
        })
    }

    return {
        getSliders(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<ISlider[]>>("/api/sliders", options)
        },
        getCategories(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<ICategory[]>>(`/api/categories`, options)
        },
        getCategoryById(id: number, options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<ICategory>>(`/api/categories/${id}`, options)
        },
        getProducts(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IProduct[]>>(`/api/products`, options)
        },
        getDevelopers(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IDeveloper[]>>(`/api/developers`, options)
        },
        getProductById(id: number, options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IProduct>>(`/api/products/${id}`, options)
        },
        getCategoryProperties(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<ICategoryProperty[]>>(`/api/category-properties`, options)
        },
        getShops(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IShop[]>>(`/api/shops`, options)
        },
        getPaymentMethod(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<PaymentMethod[]>>(`/api/payment-methods`, options)
        },
        getReceiveMethod(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<GetMethod[]>>(`/api/get-methods`, options)
        },
        getOrder(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IOrder[]>>(`/api/orders`, options)
        },
        createOrder(body: Omit<IOrder, "order_id">, options: AxiosRequestConfig<any> = {}) {
            options.method = "POST"
            options.data = body
            return baseFetch<ResponseData<IOrder>>(`/api/orders`, options)
        },
        createOrderProduct(body: Omit<IOrderProduct, "order_product_id">, options: AxiosRequestConfig<any> = {}) {
            options.method = "POST"
            options.data = body
            return baseFetch<ResponseData<IOrder[]>>(`/api/order-products`, options)
        },
        getReviews(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ResponseData<IProductReview[]>>(`/api/reviews`, options)
        },
        createReview(body: IProductReview, options: AxiosRequestConfig<any> = {}) {
            options.method = "POST"
            options.data = body
            return baseFetch<ResponseData<IOrder[]>>(`/api/reviews`, options)
        },
    }
}