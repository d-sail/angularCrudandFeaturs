export interface EmployeeInterface {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    imgPath: string;
}
