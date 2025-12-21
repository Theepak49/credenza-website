/**
 * Core Domain Types
 * These represent the fundamental business concepts in the application
 */

import { LucideIcon } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    link: string;
    category: ServiceCategory;
    features?: string[];
    benefits?: string[];

    // Business rule methods
    isFeatured(): boolean;
    hasFeatures(): boolean;
    hasBenefits(): boolean;
}

export enum ServiceCategory {
    COMPANY_FORMATION = "company-formation",
    TRANSLATION = "translation",
    PRO_SERVICES = "pro-services",
    ATTESTATION = "attestation",
    NOTARY = "notary",
    BUSINESS_SUPPORT = "business-support"
}

export interface CompanyValue {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface WhyChooseUsItem {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Statistic {
    id: string;
    value: string;
    label: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
}

export interface SocialMedia {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
}

export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    children?: NavigationItem[];
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    service?: string;
}

export interface FeedbackFormData {
    name: string;
    email: string;
    rating: number;
    feedback: string;
}
