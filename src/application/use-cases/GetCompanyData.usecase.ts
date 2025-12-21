/**
 * Get Company Data Use Case
 * Returns company information for display
 */

import { ICompanyDataRepository } from "@/domain/interfaces/ICompanyDataRepository";
import { CompanyValueDTO, WhyChooseUsDTO, StatisticDTO, ContactInfoDTO, SocialMediaDTO } from "../dtos/company.dto";
import { CompanyValue, WhyChooseUsItem, Statistic, ContactInfo, SocialMedia } from "@/domain/entities/types";

export class GetCompanyDataUseCase {
    constructor(private companyDataRepository: ICompanyDataRepository) { }

    async getCompanyValues(): Promise<CompanyValueDTO[]> {
        const values = await this.companyDataRepository.getCompanyValues();
        return values.map(this.mapCompanyValueToDTO);
    }

    async getWhyChooseUs(): Promise<WhyChooseUsDTO[]> {
        const items = await this.companyDataRepository.getWhyChooseUs();
        return items.map(this.mapWhyChooseUsToDTO);
    }

    async getStatistics(): Promise<StatisticDTO[]> {
        const stats = await this.companyDataRepository.getStatistics();
        return stats.map(this.mapStatisticToDTO);
    }

    async getContactInfo(): Promise<ContactInfoDTO> {
        const info = await this.companyDataRepository.getContactInfo();
        return this.mapContactInfoToDTO(info);
    }

    async getSocialMedia(): Promise<SocialMediaDTO> {
        const social = await this.companyDataRepository.getSocialMedia();
        return this.mapSocialMediaToDTO(social);
    }

    private mapCompanyValueToDTO(value: CompanyValue): CompanyValueDTO {
        return {
            id: value.id,
            iconName: value.icon.name || "",
            title: value.title,
            description: value.description,
        };
    }

    private mapWhyChooseUsToDTO(item: WhyChooseUsItem): WhyChooseUsDTO {
        return {
            id: item.id,
            iconName: item.icon.name || "",
            title: item.title,
            description: item.description,
        };
    }

    private mapStatisticToDTO(stat: Statistic): StatisticDTO {
        return {
            id: stat.id,
            value: stat.value,
            label: stat.label,
        };
    }

    private mapContactInfoToDTO(info: ContactInfo): ContactInfoDTO {
        return {
            phone: info.phone,
            email: info.email,
            address: info.address,
            workingHours: info.workingHours,
        };
    }

    private mapSocialMediaToDTO(social: SocialMedia): SocialMediaDTO {
        return {
            facebook: social.facebook,
            instagram: social.instagram,
            linkedin: social.linkedin,
            twitter: social.twitter,
            youtube: social.youtube,
        };
    }
}
