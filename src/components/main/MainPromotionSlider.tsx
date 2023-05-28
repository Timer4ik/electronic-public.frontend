import { PromotionSlider } from '@/ui'
import React from 'react'

type Props = {
    children?: React.ReactElement | React.ReactElement[]
}

type PromotionItem = {
    imageSource: string
    title?: string
    desc?: string
    buttonLink?: any
}

export const MainPromotionSlider = () => {
    const promotions: PromotionItem[] = [
        {
            imageSource: "/images/slider.png",
            title: "Адель, купи 3 компьютера, по цене 4",
            desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventor`,
            buttonLink: "/"
        },
        {
            imageSource: "/images/slider.png",
            title: "Адель, купи 4 компьютера, по цене 4",
            desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventor`,
            buttonLink: "/"
        },
        {
            imageSource: "/images/slider.png",
            title: "Адель, купи 5 компьютера, по цене 4",
            desc: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventor`,
            buttonLink: "/"
        },
    ]
    return (
        <div className='promotion'>
            <PromotionSlider promotions={promotions} />
        </div>
    )
}