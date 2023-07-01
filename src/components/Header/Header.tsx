import { Container, Field, Stack, Typography } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AuthLink } from './AuthLink'

const inputStyle = {
    border: "none",
    background: "white",
    height: "60px",
    padding: "0 20px",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "0px 1px 2px -1px rgba(10, 22, 70, 0.1), 0px 0px 1px 0px rgba(10, 22, 70, 0.06)"
}

export const Header = () => {
    return (
        <>
            <Stack
                paddingY={3}
                backgroundColor={"standard"}
            >
                <Container>
                    <Stack
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography fontSize={4} fontWeight="bold">
                            Казань
                        </Typography>
                        <Typography fontSize={4}>
                            <Stack gap={3}>
                                <Link href={"/shop-info"}> О нас</Link>
                                <Link href={"/shop-info"}> Наши магазины</Link>
                                <Link href={""}> Статус заказа</Link>
                                <Link href={""}> Обратная связь</Link>
                            </Stack>
                        </Typography>
                        <Typography fontSize={4} fontWeight="bold">
                            <Link href={""}>8 (800) 555-35-35</Link>
                        </Typography>
                    </Stack>
                </Container>
            </Stack>
            <Stack
                backgroundColor={"standard"}
                paddingY={3}
                marginBottom={4}
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    background: "#F5F9FC",
                    // background: "#3B4FFF",
                    borderRadius: 20,
                    borderBottom:"1px solid #80808030",
                    // borderBottom: "1px solid rgb(57 75 237)",
                    // color: "white"
                }}
            >
                <Container>
                    <Stack justifyContent='space-between' alignItems='center' gap={4}>

                        <Stack alignItems='center' gap={3}>
                            <Link href={"/"}>
                                <img style={{ minWidth: 190, minHeight: 60 }} src="/img/header/logo.svg" alt="" />
                            </Link>
                        </Stack>

                        <div style={{ width: "100%", position: "relative" }}>
                            <Field style={inputStyle} type="text" placeholder="Поиск по товарам" />
                            <img style={{
                                position: "absolute",
                                zIndex: 1000,
                                right: 20,
                                top: "50%",
                                transform: "translate(0,-50%)",
                                width: 25,
                                height: 25
                            }} src="/img/icons/search.svg" alt="" />
                        </div>

                        <Stack alignItems='center' gap={3}>
                            <Link href={""}>
                                <Stack gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                                    <img src="/img/icons/comparison.svg" width={20} height={20} alt="" />
                                    <Typography fontSize={3}>
                                        Сравнение
                                    </Typography>
                                </Stack>
                            </Link>
                            <Link href={""}>
                                <Stack gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                                    <img src="/img/icons/heart.svg" width={20} height={20} alt="" />
                                    <Typography fontSize={3}>
                                        Избранное
                                    </Typography>
                                </Stack>
                            </Link>
                            <Link href={"/cart"}>
                                <Stack gap={1} flexDirection='column' alignItems='center' justifyContent='center'>
                                    <img src="/img/icons/cart.svg" width={20} height={20} alt="" />
                                    <Typography fontSize={3}>
                                        Корзина
                                    </Typography>
                                </Stack>
                            </Link>
                            <AuthLink/>
                        </Stack>
                    </Stack>
                </Container>
            </Stack>
        </>
    )
}
