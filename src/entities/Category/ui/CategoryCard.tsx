import { Card, Stack, Typography } from '@/shared/ui'
import { ICategory } from '@/shared/types/models'
import React, { FC } from 'react'

type Props = {
    category: ICategory
}

export const CategoryCard: FC<Props> = ({ category }) => {
    return (
        <Card padding={3} style={{ aspectRatio: 1 }}>
            <Stack
                flexDirection='column'
                alignItems='center'
                justifyContent='space-around'
                style={{ height: "100%", textAlign: "center" }}
                padding={1}
            >
                <img style={{
                    objectFit: "contain",
                    flex: "0 0 60%",
                    maxWidth: "60%",
                    maxHeight: "60%",
                    width: "60%",
                    height: "60%",
                }} src={category.file?.link} alt="" />
                <Typography fontSize={3} fontWeight='bold'>{category.name}</Typography>
            </Stack>
        </Card>
    )
}
