import { ShowValueProps } from "./ShowValue.types";

export const ShowValue = (props: ShowValueProps) => {
    const { name, value } = props;

    return (
        <div className="showValue">
            <p className="showValue_name">{name}</p>
            <p className="firstToUppercase showValue_value">{value || '-'}</p>
        </div>
    )
}