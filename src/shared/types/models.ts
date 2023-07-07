export interface ResponseData<T> {
    data: T
    message: string
    count: number
}


export interface IShopProduct {
    shop_product: number
    product_id: number
    shop_id: number
    is_active: boolean
    is_sold: boolean

    product?: IProduct
}

export interface IFile {
    file_id: number
    size: number
    name?: string
    link: string
}
export interface ICategoryProperty {
    category_property_id: number
    category_id: number
    property_id: number
    property?: IProperty
    name: string
}
export interface ICategory {
    category_id: number
    name: string
    file_id?: number
    parent_id: number
    is_end: boolean
    desc?: string
    is_active: boolean

    file?: IFile
    parent?: ICategory
}

export interface IPropertyValue {
    property_value_id: number
    name: string
    property_id: number
    is_active: boolean

    property?: IProperty
}

export interface IProperty {
    property_id: number
    name: string
    is_active: boolean

    property_values?: IPropertyValue[]
}

export interface IDeveloper {
    developer_id: number
    name: string
    is_active: boolean
    file_id?: number

    file?: IFile
}

export interface IProduct {
    product_id: number
    name: string
    is_active: boolean
    descr: string
    price: number
    file_id?: number
    category_id: number
    developer_id: number

    file?: IFile
    developer?: IDeveloper
    category?: ICategory
    shop_products?: IShopProduct[]
    product_photos?: IProductPhoto[]
    product_property_values?: IProductPropertyValue[]

    product_reviews?:IProductReview[]
}

export interface IProductPhoto {

    name?: string
    product_photo_id: number
    product_id: number
    file_id: number

    product?: IProduct
    file?: IFile
}

export interface IProductPropertyValue {
    product_property_value_id: number
    product_id: number
    property_id: number
    property_value_id: number
    is_active: boolean

    property?: IProperty
    product?: IProduct
    property_value?: IPropertyValue
    category_property?: ICategoryProperty
}

export interface ISlider {
    slider_id: number
    title: string
    text: string
    file_id?: number
    product_id?: number
    is_active: boolean
    start_active_dt?: any
    end_active_dt?: any

    file?: IFile
}


export interface IShop {
    shop_id: number
    file_id?: number
    address: string
    cords: string
    openFrom: string
    openTo: string
    is_active: boolean

    file?: IFile
}

export interface PaymentMethod {
    payment_method_id: number
    name: string
}

export interface GetMethod {
    get_method_id: number
    name: string
}

export interface IOrderProduct {
    order_product_id:number
    order_id:number
    product_id:number
    amount:number

    product?:IProduct
}


export interface IOrder {
    order_id: number
    user_id: number
    status_id: number
    phone: string
    address: string
    payment_method_id: number
    get_method_id: number
    email: string

    payment_method?:PaymentMethod
    get_method?:GetMethod
    createdAt?:string
    order_products?: IOrderProduct[]
}


export interface IProductReview {
    user_id: number
    product_id:number
    comment: string
    stars: number
    createdAt?:string
    user?:{
        name:string,
    }
}