import React, { FC, ReactNode, useState } from 'react'
import { useEffectOutsideClick } from '../hooks/useEffectOutsideClick'
import { useCreateSlotById } from '../hooks/useCreateSlot'

interface Props {
    children: ReactNode
}

export const Dropdown: FC<Props> = ({ children }) => {


    const [isShow, setIsShow] = useState<boolean>(false)

    useEffectOutsideClick("dropdown", () => {
        if (isShow) {
            setIsShow(false)
        }
    }, [isShow])

    const handleClick = (e: any): any => {
        setIsShow(!isShow)
        e?.stopPropagation()
    }

    const SlotButton = useCreateSlotById({ children, idx: 0 })
    const DropDownMenu = useCreateSlotById({ children, idx: 1 })
    return (
        <div className={isShow ? "dropdown active" : "dropdown"}>
            <div className='dropdown-menu-button'>
                <SlotButton onClick={handleClick} />
            </div>
            {isShow && <DropDownMenu className='dropdown-menu' />}
        </div>
    )
}
