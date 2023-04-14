import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/shared'
import { PromotionSlider } from '@/widgets'
import { ProductSmallCard } from '@/entities/Product'
import Button from '@/shared/ui/Button'
import CartButton from '@/shared/ui/CartButton'

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
      <PromotionSlider />
      <ProductSmallCard {...data} />
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