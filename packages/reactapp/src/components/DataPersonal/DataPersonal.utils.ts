import { object, string } from 'yup';
import { DataPersonalType } from './DataPersonal.types';

export const initialValues: DataPersonalType = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    city: null,
    address: null
}

const REQUIRED_FIELD_MESSAGE = 'Este campo es requerido'

export const validationSchema = object().shape({
    firstName: string()
        .min(2, 'Ingresa el nombre completo')
        .max(80, 'El nombre es muy largo')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    lastName: string()
        .min(2, 'Ingresa tus apellidos completos')
        .max(80, 'El apellido es muy largo')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    email: string()
        .email('Ingresa un email correcto')
        .nullable()
        .required(REQUIRED_FIELD_MESSAGE),
    phone: string()
        .min(7, 'Telefono incompleto')
        .max(10, 'Número de telefono muy largo')
        .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    city: string()
        .min(2, 'Nombre de ciudad incompleto')
        .max(80, 'Nombre de ciudad muy laro')
        .required(REQUIRED_FIELD_MESSAGE)
        .nullable(),
    address: string().nullable()
})