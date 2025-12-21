/**
 * Get Featured Services Use Case
 * Returns the main featured services for display on the home page
 */

import { IServiceRepository } from "@/domain/interfaces/IServiceRepository";
import { ServiceDTO } from "../dtos/service.dto";
import { Service } from "@/domain/entities/types";

export class GetFeaturedServicesUseCase {
    constructor(private serviceRepository: IServiceRepository) { }

    async execute(): Promise<ServiceDTO[]> {
        const services = await this.serviceRepository.getFeatured();
        return services.map(this.mapToDTO);
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
}
