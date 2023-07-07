'use client'

import { Stack } from '@/shared/ui'
import { EmptyStarIcon, FullStarIcon } from '@/shared/ui/Icons/Star'
import React, { FC, useState } from 'react'

interface Props {
    value: number,
    onChange?: (value: number) => void
    disabled?: boolean
    width?: number
    height?: number
    padding?: number
}

export const StarInput: FC<Props> = ({ onChange, value, disabled, width, height,padding }) => {

    const [mouseEnterStars, setMouseEnterStars] = useState(value)

    return (
        <Stack >
            <Stack style={{ padding: padding ?? 5, cursor: "pointer" }}
                onMouseEnter={() => !disabled && setMouseEnterStars(1)}
                onMouseLeave={() => !disabled && setMouseEnterStars(value)}
                onClick={() => onChange && onChange(1)}
            >
                {mouseEnterStars >= 1 ? <FullStarIcon width={width || 30} height={height || 30} /> : <EmptyStarIcon width={width || 30} height={height || 30} />}
            </Stack >
            <Stack style={{ padding: padding ?? 5, cursor: "pointer" }}
                onMouseEnter={() => !disabled && setMouseEnterStars(2)}
                onMouseLeave={() => !disabled && setMouseEnterStars(value)}
                onClick={() => onChange && onChange(2)}
            >
                {mouseEnterStars >= 2 ? <FullStarIcon width={width || 30} height={height || 30} /> : <EmptyStarIcon width={width || 30} height={height || 30} />}
            </Stack >
            <Stack style={{ padding: padding ?? 5, cursor: "pointer" }}
                onMouseEnter={() => !disabled && setMouseEnterStars(3)}
                onMouseLeave={() => !disabled && setMouseEnterStars(value)}
                onClick={() => onChange && onChange(3)}
            >
                {mouseEnterStars >= 3 ? <FullStarIcon width={width || 30} height={height || 30} /> : <EmptyStarIcon width={width || 30} height={height || 30} />}
            </Stack >
            <Stack style={{ padding: padding ?? 5, cursor: "pointer" }}
                onMouseEnter={() => !disabled && setMouseEnterStars(4)}
                onMouseLeave={() => !disabled && setMouseEnterStars(value)}
                onClick={() => onChange && onChange(4)}
            >
                {mouseEnterStars >= 4 ? <FullStarIcon width={width || 30} height={height || 30} /> : <EmptyStarIcon width={width || 30} height={height || 30} />}
            </Stack >
            <Stack style={{ padding: padding ?? 5, cursor: "pointer" }}
                onMouseEnter={() => !disabled && setMouseEnterStars(5)}
                onMouseLeave={() => !disabled && setMouseEnterStars(value)}
                onClick={() => onChange && onChange(5)}
            >
                {mouseEnterStars >= 5 ? <FullStarIcon width={width || 30} height={height || 30} /> : <EmptyStarIcon width={width || 30} height={height || 30} />}
            </Stack>
        </Stack>
    )
}
