import {
  MainLocation, MainPartners, MainPopularProducts,
  MainProductAdvantages, MainProductCategories,
  MainPromotionSlider, MainRecently
} from "@/components/main";
export default function Main() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <MainPromotionSlider />
      {/* @ts-expect-error Async Server Component */}
      <MainPopularProducts />
      {/* @ts-expect-error Async Server Component */}
      <MainPartners />
      {/* @ts-expect-error Async Server Component */}
      <MainProductCategories />
      <MainProductAdvantages />
      {/* 
      <MainLocation />
      <MainRecently /> */}
    </>
  )
}
