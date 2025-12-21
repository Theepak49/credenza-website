/**
 * Service Data Transfer Objects
 */

export interface ServiceDTO {
    id: string;
    title: string;
    description: string;
    iconName: string;
    image: string;
    link: string;
    category: string;
    features?: string[];
    benefits?: string[];
}

export interface ServiceListDTO {
    services: ServiceDTO[];
    total: number;
}

export interface ServiceCategoryDTO {
    category: string;
    displayName: string;
    services: ServiceDTO[];
}
