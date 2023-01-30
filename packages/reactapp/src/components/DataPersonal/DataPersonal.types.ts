export interface DataPersonalType {
    id?: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    city: string | null;
    address: string | null;
}

export interface DataPersonalProps {
    isDisabled: (isValid: boolean) => boolean;
}