interface propsIcon {
    children:JSX.Element;
    height:number;
    width: number;
}

const Icon = (props:propsIcon) => (
    <svg 
        className="icon__content" 
        viewBox="0 0 32 32" 
        height={props.height} 
        width={props.width}
    >
        {props.children}
    </svg>
);

export default Icon;