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
        <aside style={{position:"sticky",top:121,height:"200px"}}>
            <nav>
                <Stack flexDirection='column' gap={3}>
                    <Stack style={{ minWidth: "18%" }} backgroundColor='standard' >
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
                                {category.name}
                            </Link>
                        )
                    })}

                </Stack>
            </nav>
        </aside>
    )
}
