function TooltipText(props){

    function handleMouseOver(){
        
    }

return <>
<span className="tooltip-text" onMouseOver={ev => handleMouseOver(ev)}>{props.children}</span>

</>
}
export default TooltipText;