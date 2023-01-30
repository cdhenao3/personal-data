export interface InputProps {
    error?: string;
    isRequired?: boolean;
    name: string;
    onBlur: any;
    onChange: any;
    spacing?: boolean;
    title: string;
    touched?: boolean;
    type?: string;
    value: string | number | null;
}