import { fetchDevelopers } from '@/hooks/use-developers'
import Image from 'next/image'
import React from 'react'

export const MainPartners = async () => {

    const developers = await fetchDevelopers({
        params: {
            "filter[is_active]": true,
            extend:"file"
        }
    })

    return (
        <div className="partners">
            <div className="title">Наши производители</div>
            <div className="partners__list">
                {developers?.data?.map(developer => {
                    return (
                        <div className="partners__item">
                            <div className="partners__image">
                                <img src={developer?.file?.link} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
