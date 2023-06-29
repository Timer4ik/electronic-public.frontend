import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { fetchCategories, fetchCategoryBreadCrumps, fetchCategoryById } from "@/hooks/use-categories";
import { Container, Stack, Typography } from "@/shared";
import Link from "next/link";

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
        <>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                    <pre>
                        <Typography fontSize={3}><Link href={`/categories`}>Каталог</Link></Typography>
                        {breadCrumps.data.map((item) => {
                            return (
                                <Typography fontSize={3}><Link href={`/categories/${item.category_id}`}>{" > " + item.name}</Link></Typography>
                            )
                        })}
                        <Typography fontWeight="bold" fontSize={5}>
                            <Link href={`/categories/${breadCrumps.lastCategory?.category_id}`}>{" > " + breadCrumps.lastCategory?.name}</Link>
                        </Typography>
                    </pre>
                </div>
            </div>
            <Stack flexDirection='column' gap={3}>
                <Typography fontSize={6} fontWeight='bold'>{breadCrumps.lastCategory?.name}</Typography>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr"
                    , gap: "20px"
                }}>
                    {categories.data.map(category => {
                        return (
                            <Link href={category.is_end ? `/products/${category.category_id}`: `/categories/${category.category_id}`}>
                                <CategoryCard category={category} />
                            </Link>
                        )
                    })}
                </div>
            </Stack>
        </>
    )
}
export default Categories

