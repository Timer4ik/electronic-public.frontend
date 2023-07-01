import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { fetchCategories } from "@/hooks/use-categories";
import { Grid, Stack, Typography } from "@/shared";
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
            <Stack>
                <pre>
                    <Typography fontWeight="bold" fontSize={5}>
                        <Link href={`/`}>Главная</Link>
                    </Typography>
                    <Typography fontSize={3}>
                        <Link href={`/categories`}>{" > "}Каталог товаров</Link>
                    </Typography>
                </pre>
            </Stack>
            <Stack flexDirection='column' gap={3}>
                <Typography fontSize={8} fontWeight='bold'>Каталог товаров</Typography>
                <Grid gap={1} columns="4">
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
