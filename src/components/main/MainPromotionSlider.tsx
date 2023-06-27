import { fetchSliders } from '@/hooks/use-slider'
import { PromotionSlider } from '@/ui'
import React, { useEffect } from 'react'

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

export async function MainPromotionSlider({ children }: Props) {

    const sliders = await fetchSliders({
        params: {
            extend:"file",
            "filter[is_active]":true
        }
    })

    return sliders?.data.length ? (
        <div className='promotion'>
            <PromotionSlider sliders={sliders?.data} />
        </div>
    ) : null
}
