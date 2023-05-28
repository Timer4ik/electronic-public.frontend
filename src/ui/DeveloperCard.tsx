import Image from 'next/image'
import React from 'react'

export const DeveloperCard = () => {
    return (
        <div className="developer-card">
            <a href="#" className="card">
                <div className="card-image">
                    <Image width={100} height={100} src="/img/product.png" alt="" />
                </div>
                <div className="card-name">
                    Samsung
                </div>
            </a>
        </div>
    )
}
