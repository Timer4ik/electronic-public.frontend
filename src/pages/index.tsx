import ProductList from "../entities/ProductList/components/ProductList"
import { FC } from "react"

type Props = {
  children?: React.ReactElement | React.ReactElement[]
}

const Home: FC<Props> = ({
  children,
}) => {

  return (
    <div className="container">
      <div className="flex-center">
        <ProductList/>
      </div>
    </div>
  )
}

export default Home