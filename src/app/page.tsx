import { Aside } from "@/components/Aside/Aside";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { CartIcon } from "@/components/Icons/CartIcon";
import { HeartIcon } from "@/components/Icons/HeartIcon";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { fetchCategories } from "@/hooks/use-categories";
import { fetchDevelopers } from "@/hooks/use-developers";
import { fetchProducts } from "@/hooks/use-products";
import { fetchSliders } from "@/hooks/use-slider";
import { Button, Card, Checkbox, Container, Field, Stack, Typography } from "@/shared";
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
      <Stack gap={3} flex="stretch-all" >
        {/* @ts-expect-error Async Server Component */}
        <Aside />
        <Stack flexDirection="column" style={{
          flex: "1 1 auto",
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
                      height: "250px",
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

                          <Stack flexDirection="column" gap={2}>
                            <Stack alignItems="center" gap={3} >
                              <img style={{
                                height: 100,
                                width: 100,
                                maxHeight: 100,
                                maxWidth: 100,
                                objectFit: "contain"
                              }} src={item?.file?.link} alt="" />
                              <Typography style={{textAlign:"center"}} fontSize={4} >
                                {item.name}
                              </Typography>
                            </Stack>
                            <Stack gap={1} alignItems="center" justifyContent="space-between">
                              <Typography fontSize={4} fontWeight="bold">{item.price.toLocaleString()} ₽</Typography>
                              <Stack gap={1} className="info__stars">
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                                <img width={15} height={15} src="/img/icons/full-star.svg" alt="" />
                              </Stack>
                              <Button color="light-standard" padding={1} size={1}>
                                <HeartIcon width={16} height={16} />
                              </Button>
                              <Button color="light-standard" padding={1} size={1}>
                                <CartIcon width={16} height={16} />
                              </Button>
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
          <Slider slidesPerView={4.1} scrollbarHide={true}>
            {developers?.data?.map(developer => {
              return (
                <img style={{
                  objectFit: "cover",
                  height: "100px",
                  width: "100%",

                  borderRadius: 20
                }} src={developer?.file?.link} alt="" />
              )
            })}
          </Slider>
        </Stack>

      </Stack>
      <Stack marginTop={3} gap={3} flexDirection="column">
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
          <Typography fontSize={6} color="gray" fontWeight='bold'>Недавно просмотренные товары</Typography>
          <Slider slidesPerView={5} >
            {products?.data?.map(product => {
              return (
                <ProductCard product={product} />
              )
            })}
          </Slider>
        </Stack>


        {/* <Card >
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
        </Card> */}

      </Stack>

    </Container >
  )
}
