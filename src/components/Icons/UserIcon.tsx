
import React, { FC } from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {

}

export const UserIcon: FC<Props> = ({ ...props }) => {
    return (
        <svg width="15" height="15" {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.125 1.76923C5.51024 1.76923 1.76923 5.51024 1.76923 10.125C1.76923 12.1529 2.49164 14.0121 3.69315 15.4592C5.1592 13.9599 7.12901 12.7237 10.125 12.7237C13.1196 12.7237 15.0895 13.9501 16.5577 15.4581C17.7587 14.0112 18.4808 12.1524 18.4808 10.125C18.4808 5.51024 14.7398 1.76923 10.125 1.76923ZM15.4857 16.5347C14.2262 15.2338 12.6195 14.2429 10.125 14.2429C7.63336 14.2429 6.026 15.24 4.76528 16.5356C6.21605 17.7498 8.08517 18.4808 10.125 18.4808C12.1653 18.4808 14.0348 17.7495 15.4857 16.5347ZM0.25 10.125C0.25 4.67119 4.67119 0.25 10.125 0.25C15.5788 0.25 20 4.67119 20 10.125C20 15.5788 15.5788 20 10.125 20C4.67119 20 0.25 15.5788 0.25 10.125ZM10.125 5.60724C8.68978 5.60724 7.52631 6.77071 7.52631 8.20593C7.52631 9.64114 8.68978 10.8046 10.125 10.8046C11.5602 10.8046 12.7237 9.64114 12.7237 8.20593C12.7237 6.77071 11.5602 5.60724 10.125 5.60724ZM6.00708 8.20593C6.00708 5.93166 7.85073 4.08801 10.125 4.08801C12.3993 4.08801 14.2429 5.93166 14.2429 8.20593C14.2429 10.4802 12.3993 12.3238 10.125 12.3238C7.85073 12.3238 6.00708 10.4802 6.00708 8.20593Z" fill="#133674"></path></svg>
    )
}

