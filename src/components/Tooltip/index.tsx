import { usePopper } from "react-popper"
import React, { useRef, useState } from 'react'
import { StyledTooltip } from "./styles"
import { detectClickOutside } from "../../utils/detectClickOutside"

interface TooltipProps extends React.ComponentPropsWithoutRef<"div"> {
    tooltipContent: React.ReactNode,
    activateOn: 'hover' | 'click',
    delay?: number
}

export const Tooltip = ({ children, tooltipContent, activateOn, delay = 250 }: TooltipProps): JSX.Element => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>()

    const tooltipRefElement = useRef(null)

    const [visible, setVisible] = useState(false)

    const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-end', modifiers: [{ name: "offset", options: { offset: [0, 10] } }, { name: "arrow", options: { element: arrowElement } }] })

    let timeout = useRef<NodeJS.Timeout>()

    const show = () => {
        if (timeout.current) clearTimeout(timeout.current)
        setVisible(true)
        detectClickOutside(tooltipRefElement, () => {
            setVisible(false)
        })
    }

    const hide = () => {
        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            setVisible(false)
        }, delay)
    }

    const toggle = () => {
        if (timeout.current) clearTimeout(timeout.current)
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
            detectClickOutside(tooltipRefElement, () => {
                setVisible(false)
            })
        }
    }


    return (
        <StyledTooltip visible={visible} ref={tooltipRefElement}>
            <div ref={ref => setReferenceElement(ref)} {...(activateOn === 'hover' ? { onMouseEnter: show, onMouseLeave: hide } : { onClick: toggle })}>
                {children}
            </div>
            {visible &&
                <div id='tooltip-main' ref={ref => setPopperElement(ref)} style={styles.popper} {...attributes.popper} tabIndex={0} {...(activateOn === 'hover' && { onMouseEnter: show, onMouseLeave: hide })}>
                    {tooltipContent}
                    <div id='tooltip-arrow' ref={ref => setArrowElement(ref)} style={styles.arrow}></div>
                </div>

            }
        </StyledTooltip>

    )
}