import Input from "@/components/atoms/Input";

interface FormFieldProps {
    id: string;
    label: React.ReactNode;
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
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                required={required}
                multiline={multiline}
                rows={rows}
            />
        </div>
    );
}
