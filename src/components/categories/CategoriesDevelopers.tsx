import { DeveloperCard } from '@/ui'
import React from 'react'

export const CategoriesDevelopers = () => {
    return (
        <div className="developers">
            <div className="big-title">Наши производители</div>
            <div className="developers__list">
                <DeveloperCard />
                <DeveloperCard />
                <DeveloperCard />
                <DeveloperCard />
            </div>
        </div>
    )
}
