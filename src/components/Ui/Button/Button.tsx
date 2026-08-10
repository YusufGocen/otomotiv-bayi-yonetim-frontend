type ButtonProps={
    children:React.ReactNode;
    type?: "button" | "submit" | "reset";
}

function Button({
    children,
    type = "button",
    }:ButtonProps){
        return <button type={type}
        className="mt-8 w-full rounded-xl bg-primary py-3 text-lg font-semibold text-white transition duration-200 hover:bg-primary-dark active:scale-[0.98]">
            {children}
         </button>
    }

export default Button;    