import { ReactNode } from "react";
import Input from "@/components/atoms/Input";

interface FormFieldProps {
    id: string;
    label: ReactNode;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
}

export default function FormField({
    id,
    label,
    value,
    onChange,
    placeholder,
    maxLength,
    required,
    multiline,
    rows,
}: FormFieldProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>

            <Input
                id={id}
                value={value}
                multiline={multiline}
                rows={rows}
                onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
                placeholder={placeholder}
                maxLength={maxLength}
                required={required}
            />
        </div>
    );
}
