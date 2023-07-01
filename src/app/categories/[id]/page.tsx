import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { fetchCategories, fetchCategoryBreadCrumps, fetchCategoryById } from "@/hooks/use-categories";
import { Container, Grid, Stack, Typography } from "@/shared";
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
            <Stack>
                <pre>
                    <Typography fontSize={3}>
                        <Link href={`/categories`}>
                            Каталог
                        </Link>
                    </Typography>
                    {breadCrumps.data.map((item) => {
                        return (
                            <Typography key={item.category_id} fontSize={3}>
                                <Link href={`/categories/${item.category_id}`}>
                                    {" > " + item.name}
                                </Link>
                            </Typography>
                        )
                    })}
                    <Typography fontWeight="bold" fontSize={5}>
                        <Link href={`/categories/${breadCrumps.lastCategory?.category_id}`}>
                            {" > " + breadCrumps.lastCategory?.name}
                        </Link>
                    </Typography>
                </pre>
            </Stack>
            <Stack flexDirection='column' gap={3}>
                <Typography fontSize={6} fontWeight='bold'>{breadCrumps.lastCategory?.name}</Typography>
                <Grid columns="4" gap={1}>
                    {categories.data.map(category => {
                        return (
                            <Link key={category.category_id} href={category.is_end ? `/products/${category.category_id}` : `/categories/${category.category_id}`}>
                                <CategoryCard category={category} />
                            </Link>
                        )
                    })}
                </Grid>
            </Stack>
        </>
    )
}
export default Categories

