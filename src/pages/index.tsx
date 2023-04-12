import ProductItem from "@/shared/ui/ProductItem"
import ProductList from "../entities/ProductList/components/ProductList"
import { FC } from "react"
import ProductItemButton from "@/shared/ui/ProductItemButton"

type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

const Home: FC<Props> = ({
  children,
}) => {

  return (
    <div className="container">
      <div className="flex-center">
        <ProductList />
        <ProductItem
          title="Электрическая варочная поверхность DEXP 4M2CTYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]"
          filledCount={5}
          availableCount={1}
          image='/images/product.png'
          price={25000}
          actionButtons={
            <>
            <ProductItemButton type="cart"></ProductItemButton>
            <ProductItemButton type="like"></ProductItemButton>
            </>
          }
        ></ProductItem>
      </div>
    </div>
  )
}

export default Home