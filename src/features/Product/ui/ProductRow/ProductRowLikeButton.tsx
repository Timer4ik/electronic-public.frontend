'use client'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { addItemToFavourite, deleteItemFromFavourite } from '@/shared/redux/slices/favouriteSlice'
import { Button } from '@/shared/ui'
import { HeartIcon } from '@/shared/ui/Icons/HeartIcon'
import React, { FC } from 'react'

interface Props {
    product_id: number
}

export const ProductRowLikeButton:FC<Props> = ({product_id}) => {

    
    const dispatch = useAppDispatch()
    const { favouriteItems } = useAppSelector(state => state.favourite)


    return !favouriteItems?.find(item => item.id == product_id) ?

        <Button onClick={() => dispatch(addItemToFavourite(product_id))} color='light-standard' size={1} padding={2} paddingY={1} fontWeight='medium'>
            <HeartIcon width={16} height={16} />
        </Button>
        :
        <Button onClick={() => dispatch(deleteItemFromFavourite(product_id))} color='primary' size={1} padding={2} paddingY={1} fontWeight='medium'>
            <HeartIcon width={16} height={16} />
        </Button>
}
