export interface DataAcademicType {
    educationCenter: string | null;
    educationLevel: string | null;
    programName: string | null;
    city: string | null;
    initialDate: string | null;
    endDate: string | null;
}

export interface DataAcademicProps {
    isDisabled: (isValid: boolean) => boolean;
}