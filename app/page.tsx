import type { ReactElement } from 'react'
import { use } from 'react'

import { HomePromotionSlider } from '@/components/home/PromotionSlider'
import { ProductPreview, ProductSmallCard } from '@/components/general/Product'
import { CartButton } from '@/ui'
import { CategoryBlock } from '@/components/general/Category/CategoryBlock'
import HomeProductPreview from '@/components/home/HomeProductPreview'

type Props = {
  title: string
  price: number
  availableCount: number
  feedbackCount: number
  filledCount: number
  children?: React.ReactElement | React.ReactElement[]
  actionButtons: React.ReactElement[] | React.ReactElement
}

const HomePage = () => {

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
      <HomeProductPreview data={data} />
      <HomePromotionSlider />
      <ProductSmallCard {...data} />
      <CategoryBlock available={1544} photo='/images/product.png' href="" title='Название' minPrice={2000} />
    </>
  )
}


export default HomePage