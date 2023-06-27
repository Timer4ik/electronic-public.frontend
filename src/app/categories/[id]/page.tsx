import { fetchCategories, fetchCategoryBreadCrumps, fetchCategoryById } from "@/hooks/use-categories";
import { CategoryCard } from "@/ui";
import { getCategoryListFromTree } from "@/utils/getCategoryListFromTree";
import Link from "next/link";
import { FC } from "react";

interface Props {
    params: {
        id: number
    }
}

const Categories = async ({ params }: Props) => {

    const categories = await fetchCategories({
        params: {
            "filter[is_active]": true,
            "filter[parent_id]": params?.id,
            extend: "file"
        }
    })
 
    const breadCrumps = await fetchCategoryBreadCrumps(+params.id)

    return (
        <div className="product__categories categories">
            <div style={{ display: "flex" }}>
                <Link href={`/categories`}>Каталог</Link>
                {breadCrumps.map((item) => {
                    return (
                        <Link href={`/categories/${item.category_id}`}>{"/"+item.name}</Link>
                    )
                })}
            </div>
            <div className="big-title">Категории</div>
            <div className="categories__blocks blocks">
                {categories?.data?.map(category => {
                    return (
                        <CategoryCard key={category.category_id} category={category} />
                    )
                })}
            </div>
        </div>
    )
}
export default Categories



