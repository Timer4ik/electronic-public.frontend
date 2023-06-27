export interface ReponseData<T> {
    data: T
    message: string
    count: number
}

// const ShopProduct = db.define("shop_product", {
//     shop_product: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
//     product_id: { type: DataTypes.INTEGER, allowNull: false },
//     shop_id: { type: DataTypes.INTEGER, allowNull: false },
//     is_active: { type: DataTypes.BOOLEAN, defaultValue: false },
//     is_sold: { type: DataTypes.BOOLEAN, defaultValue: false },
// })

// const Shop = db.define("shop", {
//     shop_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
//     file_id: { type: DataTypes.INTEGER, allowNull: true },
//     address: { type: DataTypes.STRING, allowNull: false },
//     cords: { type: DataTypes.STRING, allowNull: false },
//     openFrom: { type: DataTypes.STRING, allowNull: false },
//     openTo: { type: DataTypes.STRING, allowNull: false },
// })

export interface IShopProduct {
    shop_product: number
    product_id: number
    shop_id: number
    is_active: boolean
    is_sold: boolean

    product?: IProduct
}
export interface IShop {
    shop_id: number
    file_id: number
    address: string
    cords: string
    openFrom: string
    openTo: string
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