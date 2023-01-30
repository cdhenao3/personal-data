import dayjs from 'dayjs';
import { object, string } from 'yup';
import { DataAcademicType } from './DataAcademic.types';

export const initialValues: DataAcademicType = {
    educationCenter: null,
    educationLevel: null,
    programName: null,
    city: null,
    initialDate: null,
    endDate: null
}

const REQUIRED_FIELD_MESSAGE = 'Este campo es requerido'

export const validationSchema = object().shape({
    educationCenter: string()
        .min(2, 'Ingresa la institución educativa completa')
        .max(80, 'Ingresa un nombre de centro educativo más corto')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    // educationLevel: string()
    //     .required(REQUIRED_FIELD_MESSAGE)
    //     .nullable(),
    programName: string()
        .min(2, 'Ingresa un nombre de programa completo')
        .min(2, 'Ingresa un nombre de programa más corto')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    city: string()
        .min(2, 'Nombre de ciudad incompleto')
        .max(80, 'Nombre de ciudad muy laro')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    initialDate: string()
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    endDate: string().nullable()
})