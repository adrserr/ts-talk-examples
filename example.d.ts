// prettier-ignore
import './tooltip.scss';
import { ReactElement } from "react"
interface TooltipProps {
  elmId: string
  text: string
  className: string
  down: boolean
  children: ReactElement | null
  enableDots: boolean
  isShow: boolean | null
}
declare const Tooltip: {
  ({
    elmId,
    text,
    className,
    down,
    children,
    enableDots,
    isShow,
    ...rest
  }: TooltipProps): JSX.Element
  defaultProps: Partial<TooltipProps>
}
export default Tooltip
