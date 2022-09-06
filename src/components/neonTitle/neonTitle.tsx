import {InterfaceProps} from "./propsInterface";
import './neonTitle.css'
export const NeonTitle = (props:InterfaceProps) => {
    return <a>{props.title}</a>
}