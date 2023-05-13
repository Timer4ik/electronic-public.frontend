import { CategoryBlock } from "@/components/general/Category/CategoryBlock"
import { CategoryList } from "@/components/general/Category/CategoryList"
import { HomePromotionSlider, PopularProducts } from "@/components/home"

const HomePage = () => {
  return (
    <div >
      <HomePromotionSlider />
      <div style={{ marginTop: "30px" }}>
        <PopularProducts />
      </div>
      {/* <ProductSmallCard {...data} /> */}
      <div style={{ marginTop: "30px" }}>
        <CategoryList title="Категории товаров" />
      </div>

    </div>
  )
}


export default HomePage