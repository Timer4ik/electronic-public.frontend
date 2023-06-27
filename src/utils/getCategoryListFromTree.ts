import { ICategory } from "@/types/models"

function convertCategoryTreeToList(cats: ICategory[], data: ICategory): ICategory[] {
    if (!data.parent) {
        return cats
    }
    return convertCategoryTreeToList([...cats, data.parent], data.parent)
}

export function getCategoryListFromTree(category: ICategory): ICategory[] {
    return convertCategoryTreeToList([], category).reverse()
}