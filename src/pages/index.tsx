import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout, PromotionSlider } from '@/shared'

type PromotionItem = {
  imageSource: string
  title?: string
  desc?: string
  buttonLink?: any
}

const Page: NextPageWithLayout = () => {

  const promotions: PromotionItem[] = [
    {
      imageSource: "/images/slider.png",
      title: "Адель, купи 3 компьютера, по цене 4",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventor`,
      buttonLink: "/"
    },
    {
      imageSource: "/images/slider.png",
      title: "Адель, купи 4 компьютера, по цене 4",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventor`,
      buttonLink: "/"
    },
    {
      imageSource: "/images/slider.png",
      title: "Адель, купи 5 компьютера, по цене 4",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventor`,
      buttonLink: "/"
    },
  ]

  return (
    <>
      <PromotionSlider promotions={promotions}/>
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