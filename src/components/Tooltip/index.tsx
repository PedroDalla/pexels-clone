import { usePopper } from "react-popper"
import { useState } from 'react'
import { StyledTooltip } from "./styles"
interface TooltipProps extends React.HTMLProps<HTMLDivElement> {
    tooltipContent: React.ReactNode,
    activateOn: 'hover' | 'click'
}


export const Tooltip = ({ children, tooltipContent, activateOn }: TooltipProps): JSX.Element => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>()

    const [visible, setVisible] = useState(false)

    const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-end', modifiers: [{ name: "offset", options: { offset: [0, 10] } }, { name: "arrow", options: { element: arrowElement } }] })


    const show = () => {
        setVisible(true)
    }

    const hide = () => {
        setVisible(false)
    }

    const toggle = () => {
        setVisible(e => !e)
    }

    return (
        <StyledTooltip visible={visible}>
            <div ref={ref => setReferenceElement(ref)} onMouseEnter={show} onMouseLeave={hide} onClick={toggle}>
                {children}
            </div>
            {visible &&
                <div id='tooltip-main' ref={ref => setPopperElement(ref)} style={styles.popper} {...attributes.popper} tabIndex={0} onFocus={show} onBlur={hide}>
                    {tooltipContent}
                    <div id='tooltip-arrow' ref={ref => setArrowElement(ref)} style={styles.arrow}></div>
                </div>

            }

        </StyledTooltip>

    )
}