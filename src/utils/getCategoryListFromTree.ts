import { ICategory } from "@/types/models"

function convertCategoryTreeToList(cats: ICategory[], data: ICategory): ICategory[] {
    if (!data.parent) {
        return cats
    }

    const { parent, ...cat } = data.parent

    return convertCategoryTreeToList([...cats, cat], data.parent)
}

export function getCategoryListFromTree(category: ICategory): ICategory[] {

    return convertCategoryTreeToList([], category).reverse()
}