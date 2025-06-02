import icons from "./icons";
interface IBaseicon {
    className?: any,
    name?: string | undefined,
    color?: any,
    onClick?: React.MouseEventHandler<HTMLSpanElement> | React.MouseEventHandler<HTMLDivElement> | React.MouseEventHandler<HTMLButtonElement>,
    props?: any,

}

export default function BaseIcon(props: IBaseicon) {

    const { className, name, color, onClick } = props;
    return (
        <i className={`h-6 w-6 flex ${className ?? ""} ${color} `} onClick={onClick}>
            {name ? icons[name] : icons["copy"]}
        </i>
    );
}

// example
// <BaseIcon name="cart" color="text-black" />