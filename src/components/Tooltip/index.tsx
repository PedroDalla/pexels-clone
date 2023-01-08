import { usePopper } from "react-popper"
import React, { useRef, useState } from 'react'
import { StyledTooltip } from "./styles"
import { detectClickOutside } from "../../utils/detectClickOutside"
import { Placement } from "@popperjs/core"

interface TooltipProps extends React.ComponentPropsWithoutRef<"div"> {
    tooltipContent: React.ReactNode,
    activateOn: 'hover' | 'click',
    activateIf?: boolean,
    delay?: number,
    placement?: Placement,
    arrowOptions?: {
        size?: number,
        background?: string,
        top?: number,
        left?: number,
        right?: number,
        bottom?: number
    }
}

/**
 * A simple and customizable tooltip component
 * @param activateIf - Accepts a condition or a boolean that will determine whether or not the component is rendered
 */
export const Tooltip = ({ children, tooltipContent, activateOn, activateIf = true, delay = 250, placement = "bottom-end", arrowOptions }: TooltipProps): JSX.Element => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>()

    const tooltipRefElement = useRef(null)

    const [visible, setVisible] = useState(false)

    const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: placement, modifiers: [{ name: "offset", options: { offset: [0, 10] } }, { name: "arrow", options: { element: arrowElement, padding: 5 } }] })

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
        <StyledTooltip visible={visible} ref={tooltipRefElement} arrowOptions={arrowOptions}>
            <div ref={ref => setReferenceElement(ref)} {...(activateOn === 'hover' ? { onMouseEnter: show, onMouseLeave: hide } : { onClick: toggle })}>
                {children}
            </div>
            {(visible && activateIf) &&
                <div id='tooltip-main' ref={ref => setPopperElement(ref)} style={styles.popper} {...attributes.popper} tabIndex={0} {...(activateOn === 'hover' && { onMouseEnter: show, onMouseLeave: hide })}>
                    {tooltipContent}
                    <div id='tooltip-arrow' ref={ref => setArrowElement(ref)} style={styles.arrow}></div>
                </div>

            }
        </StyledTooltip>

    )
}