
import React, { FC } from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {

}

export const FullStarIcon: FC<Props> = ({ ...props }) => {
    return (
        <svg width="19" height="18" {...props} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.39959 0L11.5799 6.71021H18.6354L12.9274 10.8574L15.1076 17.5676L9.39959 13.4204L3.69154 17.5676L5.87182 10.8574L0.163773 6.71021H7.21931L9.39959 0Z" fill="#FD8F0D" />
        </svg>
    )
}

export const EmptyStarIcon: FC<Props> = ({ ...props }) => {
    return (
        <svg width="19" height="18" {...props} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.39959 0L11.5799 6.71021H18.6354L12.9274 10.8574L15.1076 17.5676L9.39959 13.4204L3.69154 17.5676L5.87182 10.8574L0.163773 6.71021H7.21931L9.39959 0Z" fill="#D5D5D5" />
        </svg>
    )
}