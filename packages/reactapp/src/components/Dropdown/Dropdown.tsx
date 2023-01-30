import { DropdownProps } from "./Dropdown.types";

export const Dropdown = (props: DropdownProps) => {
    const { error, isRequired = true, name, onChange, options, title, touched, value } = props;

    return (
        <div className="dropdown_container spacing">
            <p className="dropdown_title">{title} {isRequired ? '*' : ''}</p>
            <div className="dropdown_select_error">
                <select name={name} id={name} value={value || ''} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <option value={option.value}>{option.name}</option>
                        )
                    })}
                </select>
            </div>
            {(touched && error) && <span>{error}</span>}
        </div>
    )
}