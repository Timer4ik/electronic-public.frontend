import { Aside } from "@/components/Aside/Aside";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { fetchCategories } from "@/hooks/use-categories";
import { fetchDevelopers } from "@/hooks/use-developers";
import { fetchProducts } from "@/hooks/use-products";
import { fetchSliders } from "@/hooks/use-slider";
import { Card, Container, Stack, Typography } from "@/shared";
import { Slider } from "@/shared/Slider/Slider";
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
      <Stack  style={{flexWrap:"wrap"}}>
        {/* @ts-expect-error Async Server Component */}
        <Aside />
        <Stack flexDirection="column" style={{
          flex: "0 0 80%",
          overflow: "hidden"
        }}
          gap={3}
        >
          <Slider spaceBetween={0}>
            {sliders.data.map(slider => {
              return (
                <Stack
                  flexDirection="column"
                  justifyContent="space-between" style={{
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <div>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                        position: "absolute",
                        zIndex: -1
                      }}
                      src={slider.file?.link} alt="" />
                  </div>

                  <Stack padding={3}>
                    <Stack padding={3} flexDirection="column" gap={2}>
                      <Typography color="white" fontSize={6} fontWeight="bold">{slider.title}</Typography>
                      <Stack justifyContent="space-between">
                        <Typography color="white">{slider.text}</Typography>
                        {/* {
                        !!slider.product_id &&
                        <Link href={`/product/${slider.product_id}`} className="slider-button">
                          Перейти к акции
                        </Link>
                      } */}
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>)
            })}
          </Slider>

          <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Популярные товары</Typography>
            <Slider slidesPerView={4} >
              {products?.data?.map(product => {
                return (
                  <ProductCard product={product} />
                )
              })}
            </Slider>
          </Stack>

          <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Популярные товары</Typography>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr"
              , gap: "20px"
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


          <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Наши производители</Typography>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20 }}>
              {developers?.data?.map(developer => {
                return (
                  <Card style={{ aspectRatio: 1 }} noPadding>
                    <img style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%"
                    }} src={developer?.file?.link} alt="" />
                  </Card>
                )
              })}
            </div>
          </Stack>

        </Stack>
        <div style={{flex:"1 1 100%"}}>

        </div>
      </Stack>

    </Container>
  )
}
