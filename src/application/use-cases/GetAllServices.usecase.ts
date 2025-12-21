/**
 * Get All Services Use Case
 * Returns all services, optionally filtered by category
 */

import { IServiceRepository } from "@/domain/interfaces/IServiceRepository";
import { ServiceDTO, ServiceCategoryDTO } from "../dtos/service.dto";
import { Service, ServiceCategory } from "@/domain/entities/types";

export class GetAllServicesUseCase {
    constructor(private serviceRepository: IServiceRepository) { }

    async execute(category?: ServiceCategory): Promise<ServiceDTO[]> {
        const services = category
            ? await this.serviceRepository.getByCategory(category)
            : await this.serviceRepository.getAll();

        return services.map(this.mapToDTO);
    }

    async executeGroupedByCategory(): Promise<ServiceCategoryDTO[]> {
        const categories = await this.serviceRepository.getCategories();
        const grouped: ServiceCategoryDTO[] = [];

        for (const category of categories) {
            const services = await this.serviceRepository.getByCategory(category);
            grouped.push({
                category,
                displayName: this.getCategoryDisplayName(category),
                services: services.map(this.mapToDTO),
            });
        }

        return grouped;
    }

    private mapToDTO(service: Service): ServiceDTO {
        return {
            id: service.id,
            title: service.title,
            description: service.description,
            iconName: service.icon.name || "",
            image: service.image,
            link: service.link,
            category: service.category,
            features: service.features,
            benefits: service.benefits,
        };
    }

    private getCategoryDisplayName(category: ServiceCategory): string {
        const displayNames: Record<ServiceCategory, string> = {
            [ServiceCategory.COMPANY_FORMATION]: "Company Formation",
            [ServiceCategory.TRANSLATION]: "Translation Services",
            [ServiceCategory.PRO_SERVICES]: "PRO Services",
            [ServiceCategory.ATTESTATION]: "Certificate Attestation",
            [ServiceCategory.NOTARY]: "Notary Services",
            [ServiceCategory.BUSINESS_SUPPORT]: "Business Support",
        };
        return displayNames[category] || category;
    }
}
