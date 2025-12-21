/**
 * Service Repository Implementation
 * Implements IServiceRepository using static data
 */

import { IServiceRepository } from "@/domain/interfaces/IServiceRepository";
import { Service, ServiceCategory } from "@/domain/entities/types";
import { ServiceEntity } from "@/domain/entities/service.entity";
import { servicesData } from "../data/serviceData";

export class ServiceRepository implements IServiceRepository {
    async getAll(): Promise<Service[]> {
        return servicesData.map(this.mapToEntity);
    }

    async getByCategory(category: ServiceCategory): Promise<Service[]> {
        const filtered = servicesData.filter((s) => s.category === category);
        return filtered.map(this.mapToEntity);
    }

    async getById(id: string): Promise<Service | null> {
        const service = servicesData.find((s) => s.id === id);
        return service ? this.mapToEntity(service) : null;
    }

    async getFeatured(): Promise<Service[]> {
        const allEntities = servicesData.map(this.mapToEntity);
        return allEntities.filter((entity) => entity.isFeatured());
    }

    async getCategories(): Promise<ServiceCategory[]> {
        const categories = new Set(servicesData.map((s) => s.category));
        return Array.from(categories);
    }

    private mapToEntity(data: typeof servicesData[0]): Service {
        return new ServiceEntity(
            data.id,
            data.title,
            data.description,
            data.icon,
            data.image,
            data.link,
            data.category,
            data.features,
            data.benefits
        );
    }
}
