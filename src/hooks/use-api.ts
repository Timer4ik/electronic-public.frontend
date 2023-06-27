import { ICategory, ICategoryProperty, IDeveloper, IProduct, ISlider, ReponseData } from "@/types/models"
import axios, { AxiosRequestConfig } from "axios"

export const useApi = () => {

    const API_URL = "http://localhost:5000"

    const baseFetch = <T>(url: string, options: AxiosRequestConfig<any>) => {
        return axios.request<T>({
            url: API_URL + url,
            params: options.params
        })
    }

    return {
        getSliders(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<ISlider[]>>("/api/sliders", options)
        },
        getCategories(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<ICategory[]>>(`/api/categories`, options)
        },
        getProducts(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<IProduct[]>>(`/api/products`, options)
        },
        getDevelopers(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<IDeveloper[]>>(`/api/developers`, options)
        },
        getProductById(id: number, options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<IProduct>>(`/api/products/${id}`, options)
        },
        getCategoryProperties(options: AxiosRequestConfig<any> = {}) {
            return baseFetch<ReponseData<ICategoryProperty[]>>(`/api/category-properties`, options)
        },
    }
}