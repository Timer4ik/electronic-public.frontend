import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/shared'
import { PromotionSlider } from '@/widgets'
import { ProductPreview, ProductSmallCard } from '@/entities/Product'
import Button from '@/shared/ui/Button'
import CartButton from '@/shared/ui/CartButton'
import { CategoryBlock } from '@/entities/Category'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type Props = {
  title: string
  price: number
  availableCount: number
  feedbackCount: number
  filledCount: number
  children?: React.ReactElement | React.ReactElement[]
  actionButtons: React.ReactElement[] | React.ReactElement
}

const Page: NextPageWithLayout = () => {

  const data: Props = {
    title: "Здесь должно быть огромное название продукта с минимальным характеристиками",
    availableCount: 20,
    feedbackCount: 12000,
    price: 7200,
    filledCount: 3.5,
    actionButtons: <>
      <CartButton />
      <CartButton />
    </>
  }

  return (
    <>
      <ProductPreview
        photo="/images/product.png"
        images={[
          "/images/product.png",
          "/images/product.png",
          "/images/product.png",
          "/images/product.png",
          "/images/product.png",
          "/images/product.png",
          "/images/product.png",
        ]}
        available={4545}
        price={5400}
        title='Электрическая варочная поверхность DEXP 4M2C      TYL/B [независимая, конфорок -       2 шт, панель - стеклокерамика, 3.2 кВт]'
      >
        <Swiper slidesPerView={2} spaceBetween={16}>
          <SwiperSlide>
            <ProductSmallCard {...data} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSmallCard {...data} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSmallCard {...data} />
          </SwiperSlide>
        </Swiper>
      </ProductPreview>
      <PromotionSlider />
      <ProductSmallCard {...data} />
      <CategoryBlock available={1544} photo='/images/product.png' href="" title='Название' minPrice={2000} />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page