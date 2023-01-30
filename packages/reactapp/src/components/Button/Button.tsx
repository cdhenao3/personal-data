import { ButtonProps } from "./Button.types"

export const Button = (props: ButtonProps) => {
    const {
        disabled = false,
        onClickButton,
        text,
        type = 'button',
        variant = 'primary',
    } = props

    return (
        <button type={type} disabled={disabled} onClick={onClickButton} className={`button ${variant === 'primary' ? 'primary' : 'secondary'}`}>{text}</button>
    )
}