"use client"
import { fetchCategoryBreadCrumps } from '@/hooks/use-categories'
import { fetchCategoryProperties } from '@/hooks/use-category-properties'
import { fetchProducts } from '@/hooks/use-products'
import { ICategory, ICategoryProperty, IProduct, ReponseData } from '@/types/models'
import { ProductRow } from '@/ui'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Props {
  params: {
    id: number
  }
}

export default function Products({ params }: Props) {

  // const products = await fetchProducts({
  //   params: {
  //     "filter[is_active]": true,
  //     "filter[category_id]": params?.id,
  //     extend: "file,shop_products"
  //   }
  // })

  const [breadCrumps, setBreadCrumps] = useState<ICategory[]>([])

  const [categoryProperties, setCategotyProperties] = useState<ReponseData<ICategoryProperty[]>>()

  useEffect(() => {
    (async () => {
      let _categoryProperties = await fetchCategoryProperties({
        params: {
          "filter[category_id]": params?.id,
          "filter[is_filter]": false,
          extend: "property.property_values"
        }
      })

      setCategotyProperties(_categoryProperties)

      const _breadCrumps = await fetchCategoryBreadCrumps(params.id)
      setBreadCrumps(_breadCrumps)
    })()
  }, [])

  const [products, setProducts] = useState<ReponseData<IProduct[]>>()
  const [selectedPropertyValues, setSelectedPropertyValues] = useState<number[]>([])

  const addPropValue = (property_value_id: number) => {
    setSelectedPropertyValues((prev) => [...prev, property_value_id])
  }

  const refetchProducts = async () => {

    let prods = await fetchProducts({
      params: {
        "filter[is_active]": true,
        "filter[category_id]": params?.id,
        extend: "file,shop_products",
        property_value_id: selectedPropertyValues
      }
    })

    setProducts(prods)
  }


  useEffect(() => {
    refetchProducts()
  }, [selectedPropertyValues])

  return (
    <div className="products">
      <div style={{ display: "flex" }}>
        <Link href={`/categories`}>Каталог</Link>
        {breadCrumps.map((item) => {
          return (
            <Link href={`/categories/${item.category_id}`}>{"/" + item.name}</Link>
          )
        })}
      </div>
      <div className="product__title big-title">Игровые компьютеры ({products?.count} товаров)</div>
      <div style={{ display: "flex" }}>
        <div>
          {(categoryProperties?.data)?.map(item => {
            return (
              <div>
                <h6 style={{ padding: 0, margin: 0 }} >{item.name || item?.property?.name}</h6>
                <ul>
                  {item.property?.property_values?.map(item => {
                    return <li style={{ padding: 0, margin: 0 }} onClick={() => addPropValue(item.property_value_id)}>{item.name}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="products__list">
          {products?.data.map(product => {
            return (
              <ProductRow product={product} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
