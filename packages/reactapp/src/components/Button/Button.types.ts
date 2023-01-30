export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
    disabled?: boolean;
    onClickButton: () => void;
    text: string;
    type?: "submit" | "button" | "reset";
    variant?: ButtonVariant;
}