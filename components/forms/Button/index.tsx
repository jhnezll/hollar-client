interface Props {
    className?: string;
    sizes: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "light" | "filled"
    color?: "purple"
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({className, sizes, variant, color = "purple", type = "button", loading, disabled, ...props}) => {

    const styles = {
        base: "inline-flex items-center border border-transparent font-medium rounded-md " +
            "transition ease-in-out duration-150",
        sizes: {
            sm: "px-2.5 py-1.5 text-sm leading-4",
            md: "px-3 py-2 text-sm leading-4",
            lg: "px-4 py-2 text-sm leading-5",
            xl: "px-4 py-2 text-base leading-6",
            "2xl": "px-6 py-3 text-base leading-6"
        },
        filled: {
            purple: `text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-700 ` +
                `focus:shadow-outline-purple active:bg-purple-700 ${disabled ? "opacity-75" : "opacity-100"}`

        },
        light: {
            purple: `text-purple-700 bg-purple-100 hover:bg-purple-50 focus:outline-none focus:border-purple-300 ` +
                `focus:shadow-outline-purple active:bg-purple-200`
        }
    }
    return <button type={type}
                   {...props}
                   className={`${styles.base} ${styles.sizes[sizes]} ${styles[variant].purple} ${className}`}>
        {loading && <i className="fas fa-circle-notch fa-spin mr-1.5"/>}
        {props.children}
    </button>
}

export default Button