import icons from "./icons";
interface IBaseicon {
    className?: any,
    name?: string | undefined,
    color?: any

}

export default function BaseIcon(props: IBaseicon) {

    const { className, name, color } = props;
    return (
        <i className={`h-6 w-6 flex ${className ?? ""} ${color} `}>
            {name ? icons[name] : icons["copy"]}
        </i>
    );
}

// example
// <BaseIcon name="cart" color="text-black" />