import React, { useState } from 'react'

import { FormWizard } from 'components/FormWizard'

import { DataPersonal } from 'components/DataPersonal'
import { DataAcademic } from 'components/DataAcademic'
import { Resume } from 'components/Resume'
import { DataPersonalProps } from 'components/DataPersonal'
import { DataAcademicProps } from 'components/DataAcademic'

export const Data = () => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <FormWizard disabled={isDisabled}>
            <DataPersonal isDisabled={setIsDisabled as DataPersonalProps['isDisabled']} />
            <DataAcademic isDisabled={setIsDisabled as DataAcademicProps['isDisabled']} />
            <Resume />
        </FormWizard>
    )
}