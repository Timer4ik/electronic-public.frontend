import Image from "next/image"
import React, { FC } from "react"

type Props = {
    className: string
    filledCount: number
    children?: React.ReactElement | React.ReactElement[]
}

export const Stars: FC<Props> = ({ children, filledCount = 0, className = "stars" }) => {

    return (
        <div className={className}>
            {
                Array(5).fill(null).map((_, idx) => {
                    if (filledCount - idx != 0 && idx == Math.floor(filledCount)) {
                        return <Image key={idx} src="/images/icons/half-star.png" alt="me" width="20" height="18" />
                    }
                    else if (idx < filledCount) {
                        return <Image key={idx} src="/images/icons/full-star.png" alt="me" width="20" height="18" />
                    }
                    return <Image key={idx} src="/images/icons/empty-star.png" alt="me" width="20" height="18" />
                })
            }
        </div>
    )
}

