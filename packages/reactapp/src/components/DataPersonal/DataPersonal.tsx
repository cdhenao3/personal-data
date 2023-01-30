import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Input } from "components/Input"
import { Layout } from "components/Layout"
import { savePersonalData } from "features/dataCounter";

import { initialValues, validationSchema } from './DataPersonal.utils';
import personal from '../../images/personal.jpg';
import { DataPersonalProps, DataPersonalType } from "./DataPersonal.types";
import { RootState } from "store";

export const DataPersonal = (props: DataPersonalProps) => {
    const { isDisabled } = props;

    const dispatch = useDispatch()
    const initValues = useSelector((state: RootState) => state.data.personal) || initialValues

    const onSubmit = (values: DataPersonalType) => {
        dispatch(savePersonalData(values))
    }

    const {
        errors,
        handleBlur,
        handleChange,
        isValid,
        touched,
        values,
    } = useFormik({
        initialValues: initValues,
        onSubmit,
        validateOnMount: true,
        validationSchema,
    })

    useEffect(() => {
        isDisabled(!isValid)

        onSubmit(values)
    }, [isValid])

    return (
        <Layout img={personal}>
            <div className="data">
                <h1 className='data_title'>Información personal</h1>
                <div className="data_inputs">
                    <Input
                        error={errors.firstName}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='nombres'
                        touched={touched.firstName}
                        value={values.firstName}
                    />
                    <Input
                        error={errors.lastName}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='apellidos'
                        touched={touched.lastName}
                        value={values.lastName}
                    />
                    <Input
                        error={errors.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='correo'
                        touched={touched.email}
                        value={values.email}
                    />
                    <Input
                        error={errors.phone}
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='teléfono'
                        touched={touched.phone}
                        value={values.phone}
                    />
                    <Input
                        error={errors.city}
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='ciudad'
                        touched={touched.city}
                        value={values.city}
                    />
                    <Input
                        error={errors.address}
                        isRequired={false}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='dirección'
                        touched={touched.address}
                        value={values.address}
                    />
                </div>
            </div>
        </Layout>
    )
}