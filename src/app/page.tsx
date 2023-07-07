import { CategoryCard } from "@/entities/Category";
import { Aside } from "@/entities/Layout";
import { PromotionSlider } from "@/entities/Promotion/ui/PromotionSlider";
import { ShopMap } from "@/entities/Shop";
import { fetchCategories } from "@/shared/hooks/use-categories";
import { fetchDevelopers } from "@/shared/hooks/use-developers";
import { fetchProducts } from "@/shared/hooks/use-products";
import { fetchSliders } from "@/shared/hooks/use-slider";
import { Container, Grid, Stack, Typography } from "@/shared/ui";
import { DeveloperSlider } from "@/widgets/Developer";
import { ProductCardSlider, PromotionProductSlider } from "@/widgets/Product";
import Link from "next/link";

export default async function Main() {

  const products = await fetchProducts({
    params: {
      limit: 10,
      extend: "file,product_reviews",
      "filter[is_active]": true
    }
  })


  const sliders = await fetchSliders({
    params: {
      extend: "file",
      "filter[is_active]": true,
    }
  })

  const categories = await fetchCategories({
    params: {
      "filter[parent_id]": 0,
      "filter[is_active]": true,
      extend: "file"
    }
  })

  const developers = await fetchDevelopers({
    params: {
      "filter[is_active]": true,
      extend: "file"
    }
  })

  return (
    <Container>
      <Stack gap={3} flex="stretch-all" >
        {/* @ts-expect-error Async Server Component */}
        <Aside />
        <Stack flexDirection="column"
          gap={3}
        >
          <Grid columns={"4-7"} gap={2}>
            <PromotionSlider sliders={sliders.data} />
            <PromotionProductSlider products={products.data} />
          </Grid>
          <DeveloperSlider developers={developers.data} />
        </Stack>

      </Stack>
      <Stack marginTop={3} gap={3} flexDirection="column">
        <Stack flexDirection='column' gap={3}>
          <Typography fontSize={6} fontWeight='bold'>Популярные товары</Typography>
          <ProductCardSlider products={products.data} />
        </Stack>

        <Stack flexDirection='column' gap={3}>
          <Typography fontSize={6} fontWeight='bold'>Каталог товаров</Typography>
          <Grid gap={1} columns="4">
            {categories.data.map(category => {
              return (
                <Link key={category.category_id} href={`/categories/${category.category_id}`}>
                  <CategoryCard category={category} />
                </Link>
              )
            })}
          </Grid>
        </Stack>

        <ShopMap />

        <Stack flexDirection='column' gap={3}>
          <Typography fontSize={6} color="gray" fontWeight='bold'>Недавно просмотренные товары</Typography>

          <ProductCardSlider products={products.data} />
        </Stack>

      </Stack>
    </Container >
  )
}
