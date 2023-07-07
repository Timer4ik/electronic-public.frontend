import { StarInput } from '@/features/Product/ui/StarInput/StarInput'
import { IDeveloper, IProduct } from '@/shared/types/models'
import { Button, Card, Modal, Slider, Stack, Textarea, Typography } from '@/shared/ui'
import React, { FC, useState } from 'react'

interface Props {
    product?: IProduct | null
    onOutsideClick?: () => void
    onSubmit: ({
        orderText,
        starCount
    }: {
        orderText: string,
        starCount: number
    }) => void
}

export const OrderReviewModal: FC<Props> = ({ product, onSubmit,onOutsideClick }) => {

    const [orderText, setOrderText] = useState<string>("")
    const [starCount, setStarCount] = useState<number>(0)

    return (
        <Modal isShow={!!product} setIsShow={() => onOutsideClick && onOutsideClick()}>
            <Card style={{ maxWidth: 600 }}>
                <Stack flexDirection='column' gap={2}>
                    <Typography fontSize={6} fontWeight='bold'>Отзыв о товаре</Typography>
                    <Typography fontSize={5}>Товар {product?.name}</Typography>
                    <Stack flexDirection='column' gap={1}>
                        <Textarea value={orderText} onChange={(e) => setOrderText(e.target.value)} placeholder='Отзыв о товаре, опишите преимущества и недостатки товара' rows={8} />
                    </Stack>
                    <Stack justifyContent='space-between'>
                        <StarInput value={starCount} onChange={(value) => setStarCount(value)} />
                        <Button onClick={() => {
                            setOrderText("")
                            setStarCount(0)
                            onSubmit({ orderText, starCount })
                        }} size={1}>Сохранить отзыв</Button>
                    </Stack>
                </Stack>
            </Card>
        </Modal >
    )
}
