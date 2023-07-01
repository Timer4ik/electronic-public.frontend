'use client'

import { useAppDispatch } from '@/redux/hooks'
import { login } from '@/redux/slices/authSlice'
import { Button, Card, Checkbox, Field, Modal, Stack, Typography } from '@/shared'
import Link from 'next/link'
import React, { useState } from 'react'

export const AuthLink = () => {

    const [isShow, setIsShow] = useState(false)
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        dispatch(login({
            email,
            password
        }))

        setIsShow(false)
    }

    return (
        <>
            <div style={{ cursor: "pointer" }} onClick={() => setIsShow(!isShow)}>
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
                            <Field
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label='Введите e-mail' placeholder='Email' />
                            <Field
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label='Введите пароль' placeholder='Пароль' />
                            <Stack justifyContent='space-between'>
                                <Checkbox label='Запомнить меня?' />
                                <Button
                                    onClick={handleLogin}
                                    size={2} paddingX={6} color='primary'>
                                    Войти
                                </Button>
                            </Stack>
                        </Stack>
                    </Typography>
                </Card>
            </Modal>
        </>
    )
}