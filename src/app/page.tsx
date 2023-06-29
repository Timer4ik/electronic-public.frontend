import { Aside } from "@/components/Aside/Aside";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { fetchCategories } from "@/hooks/use-categories";
import { fetchDevelopers } from "@/hooks/use-developers";
import { fetchProducts } from "@/hooks/use-products";
import { fetchSliders } from "@/hooks/use-slider";
import { Card, Checkbox, Container, Field, Stack, Typography } from "@/shared";
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
      <Stack flexDirection="column" gap={3}>
        {/* @ts-expect-error Async Server Component */}
        <Aside />
        <Stack flexDirection="column" style={{
          flex: "0 0 80%",
          overflow: "hidden",

        }}
          gap={3}
        >
          <Stack gap={4}>
            <Slider spaceBetween={0} style={{
              width: "65%"
            }}>
              {sliders.data.map(slider => {
                return (
                  <Stack
                    flexDirection="column"
                    justifyContent="space-between" style={{
                      width: "100%",
                      height: "300px",
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
            <Slider style={{ width: "35%" }} className="bottomside__products" slidesPerView={1} >
              {products.data?.map(item => {
                return (
                  <Card padding={2} style={{
                    height: "100%"
                  }}>
                    <Stack flexDirection="column" gap={2}>
                      <Typography fontSize={5} fontWeight="bold">
                        Товары дня
                      </Typography>

                      <Link style={{ height: "100%" }} href={`/product/${item.product_id}`} >

                        <Stack alignItems="center" style={{ height: "100%" }} gap={3} >

                          <div className="item__img">
                            <img style={{
                              height: 200,
                              width: 200,
                              maxHeight: 200,
                              maxWidth: 200,
                              objectFit: "contain"
                            }} src={item?.file?.link} alt="" />
                          </div>
                          <Stack flexDirection="column" gap={2}>
                            <Typography fontSize={3}>
                              {item.name}
                            </Typography>
                            <Stack gap={1}>
                              <Typography fontSize={5} fontWeight="bold">{item.price.toLocaleString()} ₽</Typography>
                            </Stack>
                            <Stack gap={1} className="info__stars">
                              <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                              <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                              <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                              <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                              <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                            </Stack>
                            <Stack gap={1} alignItems="center" justifyContent="space-around" backgroundColor="primary" style={{
                              padding: "10px 20px",
                              borderRadius: "10px"
                            }}>
                              <Typography fontWeight="bold" fontSize={5}>Купить</Typography>
                              <img width={20} height={20} src="/img/icons/white-cart.svg" alt="" />
                            </Stack>
                          </Stack>
                        </Stack>

                      </Link>
                    </Stack>
                  </Card>
                )
              })}
            </Slider>
          </Stack>

          <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Популярные товары</Typography>
            <Slider slidesPerView={5} >
              {products?.data?.map(product => {
                return (
                  <ProductCard product={product} />
                )
              })}
            </Slider>
          </Stack>

          <Stack flexDirection='column' gap={3}>
            <Typography fontSize={6} fontWeight='bold'>Каталог товаров</Typography>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr"
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
          <Card >
            <Stack flexDirection='column' gap={3}>
              <Typography fontSize={6} fontWeight='bold'>Регистрация в системе</Typography>
              <Stack flexDirection="column" gap={3} marginBottom={5}>
                <Typography fontSize={5} fontWeight="medium">Личный кабинет</Typography>
                <Field label="Введите логин" />
                <Field label="Введите пароль" />
                <Checkbox label="Запомнить" />
                <Stack alignItems="center">
                  <Stack backgroundColor="primary" padding={2} paddingX={5} style={{
                    borderRadius: "10px"
                  }}>
                    <Typography fontSize={5} fontWeight="bold">Зарегистироваться</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Card>

        </Stack>
        <div style={{ flex: "1 1 100%" }}>

        </div>
      </Stack>

    </Container >
  )
}
