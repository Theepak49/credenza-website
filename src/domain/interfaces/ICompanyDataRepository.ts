/**
 * Company Data Repository Interface
 * Defines the contract for accessing company information
 */

import { CompanyValue, WhyChooseUsItem, Statistic, ContactInfo, SocialMedia, NavigationItem } from "../entities/types";

export interface ICompanyDataRepository {
    /**
     * Get company values
     */
    getCompanyValues(): Promise<CompanyValue[]>;

    /**
     * Get "Why Choose Us" items
     */
    getWhyChooseUs(): Promise<WhyChooseUsItem[]>;

    /**
     * Get company statistics
     */
    getStatistics(): Promise<Statistic[]>;

    /**
     * Get contact information
     */
    getContactInfo(): Promise<ContactInfo>;

    /**
     * Get social media links
     */
    getSocialMedia(): Promise<SocialMedia>;

    /**
     * Get navigation items
     */
    getNavigation(): Promise<NavigationItem[]>;
}
