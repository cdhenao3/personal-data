import { RootState } from 'store';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from "formik";
import React, { useEffect } from 'react'

import { Dropdown } from 'components/Dropdown';
import { Input } from "components/Input"
import { Layout } from "components/Layout"
import { saveAcademicData } from 'features/dataCounter';

import academic from '../../images/academic.jpg';
import { DataAcademicProps, DataAcademicType } from './DataAcademic.types';
import { initialValues, validationSchema } from './DataAcademic.utils';
import { EDUCATION_LEVEL_OPTIONS } from '../../constants'

export const DataAcademic = (props: DataAcademicProps) => {
    const { isDisabled } = props;

    const dispatch = useDispatch()
    const initValues = useSelector((state: RootState) => state.data.academic) || initialValues

    const onSubmit = (values: DataAcademicType) => {
        dispatch(saveAcademicData(values))
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
        <Layout img={academic}>
            <div className="data">
                <h1 className='data_title'>Información académica</h1>
                <div className="data_inputs">
                    <Input
                        error={errors.educationCenter}
                        name='educationCenter'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='institución educativa'
                        touched={touched.educationCenter}
                        value={values.educationCenter}
                    />
                    <Dropdown
                        error={errors.educationLevel}
                        name="educationLevel"
                        title='nivel educativo'
                        onChange={handleChange}
                        options={EDUCATION_LEVEL_OPTIONS}
                        touched={touched.educationLevel}
                        value={values.educationLevel}
                    />
                    <Input
                        error={errors.programName}
                        name='programName'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='nombre programa'
                        touched={touched.programName}
                        value={values.programName}
                    />
                    <Input
                        error={errors.city}
                        name='city'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='ciudad'
                        touched={touched.city}
                        value={values.city}
                    />
                    <Input
                        error={errors.initialDate}
                        name='initialDate'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='fecha de inicio'
                        type='date'
                        touched={touched.initialDate}
                        value={values.initialDate}
                    />
                    <Input
                        error={errors.endDate}
                        isRequired={false}
                        name='endDate'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        title='fecha finalización'
                        type='date'
                        touched={touched.endDate}
                        value={values.endDate}
                    />
                </div>
            </div>
        </Layout>
    )
}