/**
 * Company Data Repository Implementation
 * Implements ICompanyDataRepository using static data
 */

import { ICompanyDataRepository } from "@/domain/interfaces/ICompanyDataRepository";
import {
    CompanyValue,
    WhyChooseUsItem,
    Statistic,
    ContactInfo,
    SocialMedia,
    NavigationItem,
} from "@/domain/entities/types";
import {
    companyValuesData,
    whyChooseUsData,
    statisticsData,
    contactInfoData,
    socialMediaData,
    navigationData,
} from "../data/companyData";

export class CompanyDataRepository implements ICompanyDataRepository {
    async getCompanyValues(): Promise<CompanyValue[]> {
        return companyValuesData;
    }

    async getWhyChooseUs(): Promise<WhyChooseUsItem[]> {
        return whyChooseUsData;
    }

    async getStatistics(): Promise<Statistic[]> {
        return statisticsData;
    }

    async getContactInfo(): Promise<ContactInfo> {
        return contactInfoData;
    }

    async getSocialMedia(): Promise<SocialMedia> {
        return socialMediaData;
    }

    async getNavigation(): Promise<NavigationItem[]> {
        return navigationData;
    }
}
