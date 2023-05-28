import Image from 'next/image'
import React from 'react'

export const MainPartners = () => {
    return (
        <div className="partners">
            <div className="title">Наши партнёры</div>
            <div className="partners__list">
                <div className="partners__item">
                    <div className="partners__image">
                        <Image width={100} height={100} src="/img/mvideo.png" alt="" />
                    </div>
                </div>
                <div className="partners__item">
                    <div className="partners__image">
                        <Image width={100} height={100} src="/img/mvideo.png" alt="" />
                    </div>
                </div>
                <div className="partners__item">
                    <div className="partners__image">
                        <Image width={100} height={100} src="/img/mvideo.png" alt="" />
                    </div>
                </div>
                <div className="partners__item">
                    <div className="partners__image">
                        <Image width={100} height={100} src="/img/mvideo.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
