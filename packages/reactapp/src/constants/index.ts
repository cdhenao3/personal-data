import { Option } from "components/Dropdown"

export const URL = process.env.REACT_APP_URL

export const EDUCATION_LEVEL_OPTIONS: Option[] = [
    {
        name: 'Primaria',
        value: 'primaria'
    },
    {
        name: 'Secundaria',
        value: 'secundaria'
    },
    {
        name: 'Pregrado',
        value: 'pregrado'
    },
    {
        name: 'Postgrado',
        value: 'postgrado'
    },
]