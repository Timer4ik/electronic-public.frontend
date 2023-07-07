'use client'
import { useAppDispatch, useAppSelector } from '@/shared/redux/hooks'
import { login, logout } from '@/shared/redux/slices/authSlice'
import { Button, Card, Checkbox, Dropdown, Field, Modal, Stack, Typography } from '@/shared/ui'
import { UserIcon } from '@/shared/ui/Icons/UserIcon'
import Link from 'next/link'
import React, { useState } from 'react'

export const AuthLink = () => {

    const [isShow, setIsShow] = useState(false)
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const { isAuth } = useAppSelector(state => state.auth)

    const [tab, setTab] = useState(0)
    const handleLogin = async () => {
        dispatch(login({
            email,
            password
        }))

        setIsShow(false)
    }
    const handleRegister = async () => {
        await fetch(`http://localhost:5000/api/auth/register`, {
            body: JSON.stringify({
                email, password,name
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })

        await handleLogin()
    }

    return (
        <>
            <div style={{ cursor: "pointer" }}>
                {isAuth ?
                    <Dropdown>
                        <div>
                            <Stack gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                                <UserIcon width={20} height={20} />
                                <Typography fontSize={3}>
                                    Профиль
                                </Typography>
                            </Stack>
                        </div>
                        <div>
                            <Typography>
                                <Link href={"/orders"}>Заказы</Link>
                            </Typography>
                            <Typography onClick={() => dispatch(logout())}>Выйти из системы</Typography>
                        </div>
                    </Dropdown>
                    :
                    <Stack onClick={() => setIsShow(!isShow)} gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                        <UserIcon width={20} height={20} />
                        <Typography fontSize={3}>
                            Вход
                        </Typography>
                    </Stack>
                }
                <Modal isShow={isShow} setIsShow={setIsShow}>
                    <Card padding={5} style={{
                        width: 600,
                    }}>
                        {tab == 0 &&
                            <Typography fontSize={7}>
                                <Stack flexDirection='column' gap={3}>
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
                                <Typography
                                    onClick={() => setTab(1)} color='gray'>
                                    Зарегистрироваться
                                </Typography>
                            </Typography>
                        }
                        {tab == 1 &&
                            <Typography fontSize={7}>
                                <Stack flexDirection='column' gap={3}>
                                    <Typography fontSize={7} fontWeight='bold'>Вход или Регистрация</Typography>
                                    <Field
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        label='Введите имя пользователя' placeholder='Имя пользователя' />
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
                                            onClick={handleRegister}
                                            size={2} paddingX={6} color='primary'>
                                            Регистрация
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Typography
                                    onClick={() => setTab(0)} color='gray'>
                                    Вход
                                </Typography>
                            </Typography>
                        }


                    </Card>
                </Modal>
            </div>


        </>
    )
}