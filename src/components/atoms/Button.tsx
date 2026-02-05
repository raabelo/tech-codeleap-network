type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "info";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={props.type || "button"}
      className={`px-8 py-2 rounded-lg ${props.className}`}
    >
      {props.children}
    </button>
  );
}
