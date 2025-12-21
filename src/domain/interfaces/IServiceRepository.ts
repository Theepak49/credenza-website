/**
 * Service Repository Interface
 * Defines the contract for service data access
 */

import { Service, ServiceCategory } from "../entities/types";

export interface IServiceRepository {
    /**
     * Get all services
     */
    getAll(): Promise<Service[]>;

    /**
     * Get services by category
     */
    getByCategory(category: ServiceCategory): Promise<Service[]>;

    /**
     * Get a single service by ID
     */
    getById(id: string): Promise<Service | null>;

    /**
     * Get featured services
     */
    getFeatured(): Promise<Service[]>;

    /**
     * Get all service categories
     */
    getCategories(): Promise<ServiceCategory[]>;
}
