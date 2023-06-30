'use client'

import { Card, Checkbox, Field, Modal, Stack, Typography } from '@/shared'
import Link from 'next/link'
import React, { useState } from 'react'

export const AuthLink = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <div style={{cursor:"pointer"}} onClick={() => setIsShow(!isShow)}>
                <Stack gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                    <img src="/img/icons/login.svg" width={20} height={20} alt="" />
                    <Typography fontSize={3}>
                        Вход
                    </Typography>
                </Stack>
            </div>
            <Modal isShow={isShow} setIsShow={setIsShow}>
                <Card padding={5} style={{
                    width: 600,
                }}>
                    <Typography fontSize={7}>
                        <Stack flexDirection='column' gap={5}>
                            <Typography fontSize={7} fontWeight='bold'>Вход или Регистрация</Typography>
                            <Field label='Введите e-mail' placeholder='Email' />
                            <Field label='Введите пароль' placeholder='Пароль' />
                            <Checkbox label='Запомнить меня?' />
                            <button onClick={() => setIsShow(!isShow)}>Закрыть</button>
                        </Stack>
                    </Typography>
                </Card>
            </Modal>
        </>
    )
}