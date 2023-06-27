import { fetchCategories } from "@/hooks/use-categories";
import { CategoryCard } from "@/ui";


export default async function Categories() {
    const categories = await fetchCategories({
        params: {
            "filter[is_active]": true,
            "filter[parent_id]": 0,
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
