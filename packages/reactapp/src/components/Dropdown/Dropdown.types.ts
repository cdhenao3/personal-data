export interface Option {
    name: string;
    value: string;
}

export interface DropdownProps {
    error?: string;
    isRequired?: boolean;
    name: string;
    onChange: any;
    options: Option[];
    title: string;
    touched?: boolean;
    value: string | null;
}