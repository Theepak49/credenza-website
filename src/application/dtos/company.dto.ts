/**
 * Company Data Transfer Objects
 */

export interface CompanyValueDTO {
    id: string;
    iconName: string;
    title: string;
    description: string;
}

export interface WhyChooseUsDTO {
    id: string;
    iconName: string;
    title: string;
    description: string;
}

export interface StatisticDTO {
    id: string;
    value: string;
    label: string;
}

export interface ContactInfoDTO {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
}

export interface SocialMediaDTO {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
}
