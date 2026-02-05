export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type={props.type || "text"}
            className={`border border-neutral-dark rounded-lg w-full py-2 px-3 ${props.className}`}
        />
    );
}
