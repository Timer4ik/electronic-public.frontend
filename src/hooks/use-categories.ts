import { getCategoryListFromTree } from "@/utils/getCategoryListFromTree";
import { useApi } from "./use-api";
import { AxiosRequestConfig } from "axios"
import { ICategory } from "@/types/models";

export async function fetchCategoryById(id: number, options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getCategoryById(id, options)

    return response.data
}

export async function fetchCategories(options: AxiosRequestConfig<any>) {
    const Api = useApi()

    const response = await Api.getCategories(options)

    return response.data
}

export async function fetchCategoryBreadCrumps(id: number): Promise<{
    data: ICategory[]
    lastCategory: ICategory
}> {

    let response = await fetchCategoryById(id, {
        params: {
            extend: "parent"
        }
    })
    let { parent, ...category } = response.data

    return {
        data: getCategoryListFromTree(response?.data),
        lastCategory: category
    }
}