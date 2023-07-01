import { Slider } from '@/shared/Slider/Slider'
import { IDeveloper } from '@/types/models'
import React, { FC } from 'react'

interface Props {
    developers: IDeveloper[]
}

export const DeveloperSlider: FC<Props> = ({ developers }) => {
    return (
        <Slider slidesPerView={4.1} scrollbarHide={true}>
            {developers?.map(developer => {
                return (
                    <img key={developer.developer_id} style={{
                        objectFit: "cover",
                        height: "100px",
                        width: "100%",

                        borderRadius: 20
                    }} src={developer?.file?.link} alt="" />
                )
            })}
        </Slider>
    )
}
