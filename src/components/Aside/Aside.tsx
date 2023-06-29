import { fetchCategories } from '@/hooks/use-categories'
import { Card, Stack, Typography } from '@/shared'
import Link from 'next/link'
import React from 'react'

export const Aside = async () => {

    const categories = await fetchCategories({
        params: {
            "filter[parent_id]": 0
        }
    })

    return (
        <div style={{ position: "sticky" }}>
            <nav>
                <Stack  gap={5} alignItems='center'>
                    <Stack  backgroundColor='standard' >
                        <Typography fontSize={8} fontWeight='bold'>
                            <Link
                                href={"/categories"}
                            >
                                Каталог
                            </Link>
                        </Typography>
                    </Stack>
                    {categories?.data?.map(category => {
                        return (
                            <Link href={"/categories/" + category.category_id}>
                                <Stack gap={1} alignItems='center'>
                                    <img width={20} height={20} src='/img/icons/icon.svg' />
                                    <Typography fontSize={3}>
                                        {category.name}
                                    </Typography>
                                </Stack>
                            </Link>
                        )
                    })}

                </Stack>
            </nav>
        </div>
    )
}
