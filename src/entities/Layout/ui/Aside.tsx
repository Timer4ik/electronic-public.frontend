import { fetchCategories } from '@/shared/hooks/use-categories'
import { Card, Stack, Typography } from '@/shared/ui'
import Link from 'next/link'
import React from 'react'

export const Aside = async () => {

    const categories = await fetchCategories({
        params: {
            "filter[parent_id]": [0,1,2,3],
        }
    })

    return (
        <div style={{ position: "sticky", flex: "0 0 22%" }}>
            <nav>
                <Stack gap={2} flexDirection='column'>
                    <Stack backgroundColor='standard' >
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
                            <Stack key={category.category_id} gap={1} alignItems='center'>
                                <img width={20} height={20} src='/img/icons/icon.svg' />
                                <Typography fontSize={3}>
                                    <Link href={"/categories/" + category.category_id}>
                                        {category.name}
                                    </Link>
                                </Typography>
                            </Stack>
                        )
                    })}

                </Stack>
            </nav>
        </div>
    )
}
