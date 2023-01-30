import { Button } from 'components/Button';
import React, { useState } from 'react'
import { FormWizardProps } from './FormWizard.types';

export const FormWizard = (props: FormWizardProps) => {
    const { children, disabled } = props;

    const [activePageIndex, setActivePageIndex] = useState(0);

    const pages = React.Children.toArray(children);
    const currentPage = pages[activePageIndex];

    const onClickNextPage = () => {
        setActivePageIndex(index => index + 1);
    };

    const onClickPreviousPage = () => {
        setActivePageIndex(index => index - 1);
    };

    const PreviousButton = () =>
        activePageIndex > 0 ? (
            <Button
                onClickButton={onClickPreviousPage}
                text='atrás'
                variant='secondary'
            />
        ) : null;

    const NextButton = () =>
        activePageIndex < pages.length - 1 ? (
            <Button
                disabled={disabled}
                onClickButton={onClickNextPage}
                text='siguiente'
                type='submit'
            />
        ) : null;


    return (
        <div className='formWizard'>
            <div>{currentPage}</div>
            <div className='formWizard_buttons'>
                <PreviousButton />
                <NextButton />
            </div>
        </div>
    )
}