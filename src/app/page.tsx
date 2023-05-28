import {
  MainLocation, MainPartners, MainPopularProducts,
  MainProductAdvantages, MainProductCategories, 
  MainPromotionSlider,MainRecently
} from "@/components/main";

export default function Main() {
  return (
    <>
      <MainPromotionSlider />
      <MainPopularProducts />
      <MainProductCategories />
      <MainProductAdvantages />
      <MainPartners />
      <MainLocation />
      <MainRecently />
    </>
  )
}
