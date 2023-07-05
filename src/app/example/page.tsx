"use client"
import { Container, Stack, Typography } from "@/shared/ui";
import { Button } from "@/shared/ui";
import Link from "next/link";


export default function Product() {
    return (
        <Stack
            padding={1}
            backgroundColor={"standard"}
            gap={5}
            flexDirection="column"
        >
            <Stack>
                <Button type="button" color="primary">
                    <div>Купить</div>
                    <img style={{
                        minHeight: 18,
                        objectFit: "contain"
                    }} src="/img/icons/cart.svg" alt="" />
                </Button>
            </Stack>
            <Stack>
                <Button type="button" size={2}>
                    <div>Купить</div>
                    <img style={{
                        minHeight: 18,
                        objectFit: "contain"
                    }} src="/img/icons/cart.svg" alt="" />
                </Button>
            </Stack>
            <Stack>
                <Button type="button" size={3}>
                    <div>Купить</div>
                    <img style={{
                        minHeight: 18,
                        objectFit: "contain"
                    }} src="/img/icons/cart.svg" alt="" />
                </Button>
            </Stack>
            <Stack>
                <Button type="button" size={4}>
                    <div>Купить</div>
                    <img style={{
                        minHeight: 18,
                        objectFit: "contain"
                    }} src="/img/icons/cart.svg" alt="" />
                </Button>
            </Stack>
            <Stack>
                <Button type="button" size={5}>
                    <div>Купить</div>
                    <img style={{
                        minHeight: 18,
                        objectFit: "contain"
                    }} src="/img/icons/cart.svg" alt="" />
                </Button>
            </Stack>
        </Stack>
    )
}
