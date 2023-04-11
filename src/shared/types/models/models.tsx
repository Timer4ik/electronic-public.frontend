
export interface Category {
    category_id: number
    name?: string

    sub_categories?: SubCategory[]
}

export interface SubCategory {
    sub_category_id: number
    name?: string
    category_id: number

    category?: Category
}

export interface ProductPhoto {
    product_photo_id: number
    name?: string
    url?: string
    product_id: number

    product?: Product
}

export interface Product {
    product_id: number
    name: string
    is_active: boolean
    descr?: string
    price: number
    image_url?: string
    sub_category_id: number

    sub_category?: SubCategory
    product_photos?: ProductPhoto[]

    // Может работает, а может и нет хз)
    promo_product?: Promo
}

export interface Slider {
    slider_id: number
    title?: string
    text?: string
    photo_url?: string
    product_id: number
    is_active: boolean
    start_active_dt: Date
    end_active_dt: Date

    product?: Product
}



// Может работает, а может и нет хз)
export interface Promo {
    promo_id: number
    title?: string
    text?: string

    promo_products?: PromoProduct[]
}

export interface PromoProduct {
    promo_id: number
    product_id: number

    promo_product?: PromoProduct
} 