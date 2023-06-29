import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { fetchCategories } from "@/hooks/use-categories";
import { Stack, Typography } from "@/shared";
import Link from "next/link";


export default async function Categories() {
    const categories = await fetchCategories({
        params: {
            "filter[is_active]": true,
            "filter[parent_id]": 0,
            extend: "file"
        }
    })
    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                    <pre>
                        <Typography fontWeight="bold" fontSize={5}><Link href={`/`}>Главная</Link></Typography>
                        <Typography fontSize={3}><Link href={`/categories`}> {">"} Каталог товаров</Link></Typography>
                    </pre>
                </div>
            </div>
            <Stack flexDirection='column' gap={3}>
                <Typography fontSize={8} fontWeight='bold'>Каталог товаров</Typography>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "20px"
                }}>
                    {categories.data.map(category => {
                        return (
                            <Link href={`/categories/${category.category_id}`}>
                                <CategoryCard category={category} />
                            </Link>
                        )
                    })}
                </div>
            </Stack>
        </>
    )
}
