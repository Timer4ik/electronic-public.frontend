'use client'

import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { addItemToFavourite, deleteItemFromFavourite } from '@/shared/redux/slices/favouriteSlice'
import { Button } from '@/shared/ui'
import { HeartIcon } from '@/shared/ui/Icons/HeartIcon'
import React, { FC } from 'react'

interface Props {
    product_id: number
}

export const ProductCardLikeButton: FC<Props> = ({ product_id }) => {

    const dispatch = useAppDispatch()
    const { favouriteItems } = useAppSelector(state => state.favourite)

    return !favouriteItems?.find(item => item.id == product_id) ?
        <Button onClick={() => dispatch(addItemToFavourite(product_id))} color='light-standard' padding={2} size={1}><HeartIcon width={15} height={15} /></Button>
        :
        <Button active onClick={() => dispatch(deleteItemFromFavourite(product_id))}  padding={2} size={1}><HeartIcon width={15} height={15} /></Button>
}
