import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/shared'
import { PromotionSlider } from '@/widgets'

const Page: NextPageWithLayout = () => {

  return (
    <>
      <PromotionSlider />
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