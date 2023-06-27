import { fetchCategories } from "@/hooks/use-categories";
import { CategoryCard } from "@/ui";
import { FC } from "react";

interface Props {
    params?: {
        id: number
    }
}

const Categories = async ({ params }: Props) => {

    const categories = await fetchCategories({
        params: {
            "filter[is_active]": true,
            "filter[parent_id]": params?.id,
            extend:"file"
        }
    })
    return (
        <div className="product__categories categories">
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