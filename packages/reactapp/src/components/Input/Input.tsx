import { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
    const {
        error,
        isRequired = true,
        name,
        onBlur,
        onChange,
        spacing = true,
        title,
        touched,
        type = 'text',
        value,
    } = props;

    return (
        <div className={`input_container ${spacing ? 'spacing' : ''}`}>
            <p className="input_title">{title} {isRequired ? ' *' : ''}</p>
            <div className="input_input-error">
                <input
                    autoComplete="off"
                    className="input"
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    type={type}
                    value={value || undefined}
                />
                {(touched && error) && <span>{error}</span>}
            </div>
        </div>
    )
} 