import React, { FC, useState, useEffect } from "react"
import { Product } from "../../../shared/types"
import { useProducts } from "../hooks/useApi"
import Card from "@/shared/ui/Card"
import CartButton from "@/shared/ui/CartButton"

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

const ProductListStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    margin: 40
}

const Component: FC<Props> = ({ children }) => {

    const { products, fetchProducts } = useProducts()

    const cardInfo = {
        children,
        price: 2500,
        feedbackCount: 12000,
        availableCount: 3,
        filledCount: 3.9,
        title: "Электрическая варочная поверхность DEXP 4M2CTYL/B [независимая, конфорок - 2 шт, панель - стеклокерамика, 3.2 кВт]"
    }

    // useEffect(() => {
    //     (async () => {
    //         await fetchProducts()
    //     })()
    // }, [])

    return (
        <div>
            <div style={ProductListStyle}>
                {products.map((product) => {
                    return (
                        <Card {...cardInfo} actionButtons={
                            <>
                                <CartButton/>
                                <CartButton />
                            </>
                        } />
                    )
                })}
            </div>
        </div>
    )
}

export default Component
