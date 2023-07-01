import { Stack, Typography } from '@/shared'
import { Slider } from '@/shared/Slider/Slider'
import { ISlider } from '@/types/models'
import React, { FC } from 'react'

interface Props {
    sliders:ISlider[]
}

export const PromotionSlider:FC<Props> = ({sliders}) => {
    return (
        <Slider spaceBetween={0}>
            {sliders.map(slider => {
                return (
                    <Stack
                        flexDirection="column"
                        justifyContent="space-between" style={{
                            width: "100%",
                            height: "250px",
                        }}
                    >
                        <div>
                            <img
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10,
                                    position: "absolute",
                                    zIndex: -1
                                }}
                                src={slider.file?.link} alt="" />
                        </div>

                        <Stack padding={3}>
                            <Stack padding={3} flexDirection="column" gap={2}>
                                <Typography color="white" fontSize={6} fontWeight="bold">{slider.title}</Typography>
                                <Stack justifyContent="space-between">
                                    <Typography color="white">{slider.text}</Typography>
                                    {/* {
                        !!slider.product_id &&
                        <Link href={`/product/${slider.product_id}`} className="slider-button">
                          Перейти к акции
                        </Link>
                      } */}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>)
            })}
        </Slider>
    )
}
