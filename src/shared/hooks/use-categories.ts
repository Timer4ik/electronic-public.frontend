import { appApi } from "./use-api";
import { AxiosRequestConfig } from "axios"
import { ICategory } from "@/shared/types/models";
import { getCategoryListFromTree } from "../utils/getCategoryListFromTree";

export async function fetchCategoryById(id: number, options: AxiosRequestConfig<any>) {
    const Api = appApi()

    const response = await Api.getCategoryById(id, options)

    return response.data
}

export async function fetchCategories(options: AxiosRequestConfig<any>) {
    const Api = appApi()

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