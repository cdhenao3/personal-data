export interface SingleRow {
    educationCenter: string;
    educationLevel: string,
    email: string;
    firstName: string;
    id: number;
    lastName: string;
}

export interface TableSingleRowProps {
    data: SingleRow;
}