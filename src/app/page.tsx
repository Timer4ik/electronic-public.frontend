import { Aside } from "@/components/Aside/Aside";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { DeveloperSlider } from "@/components/DevelopersSlider/DeveloperSlider";
import { ProductCardSlider } from "@/components/Product/ProductCard/ProductCardSlider";
import { PromotionProductSlider } from "@/components/Product/PromotionProduct/PromotionProductSlider";
import { PromotionSlider } from "@/components/PromotionSlider/PromotionSlider";
import { ShopLocation } from "@/components/ShopLocation/ShopLocation";
import { fetchCategories } from "@/hooks/use-categories";
import { fetchDevelopers } from "@/hooks/use-developers";
import { fetchProducts } from "@/hooks/use-products";
import { fetchSliders } from "@/hooks/use-slider";
import { Container, Grid, Stack, Typography } from "@/shared";
import Link from "next/link";

export default async function Main() {

  const products = await fetchProducts({
    params: {
      limit: 10,
      extend: "file",
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

        <ShopLocation />

        <Stack flexDirection='column' gap={3}>
          <Typography fontSize={6} color="gray" fontWeight='bold'>Недавно просмотренные товары</Typography>

          <ProductCardSlider products={products.data} />
        </Stack>

      </Stack>
    </Container >
  )
}
