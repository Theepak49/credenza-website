/**
 * Service Entity
 * Represents a business service with validation and business rules
 */

import { Service, ServiceCategory } from "./types";
import { LucideIcon } from "lucide-react";

export class ServiceEntity implements Service {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly icon: LucideIcon,
        public readonly image: string,
        public readonly link: string,
        public readonly category: ServiceCategory,
        public readonly features?: string[],
        public readonly benefits?: string[]
    ) {
        this.validate();
    }

    private validate(): void {
        if (!this.id || this.id.trim() === "") {
            throw new Error("Service ID is required");
        }
        if (!this.title || this.title.trim() === "") {
            throw new Error("Service title is required");
        }
        if (!this.description || this.description.trim() === "") {
            throw new Error("Service description is required");
        }
        if (!this.link || this.link.trim() === "") {
            throw new Error("Service link is required");
        }
    }

    public isFeatured(): boolean {
        // Business rule: Featured services are the main categories
        return [
            ServiceCategory.COMPANY_FORMATION,
            ServiceCategory.BUSINESS_SUPPORT,
            ServiceCategory.PRO_SERVICES,
            ServiceCategory.ATTESTATION
        ].includes(this.category);
    }

    public hasFeatures(): boolean {
        return this.features !== undefined && this.features.length > 0;
    }

    public hasBenefits(): boolean {
        return this.benefits !== undefined && this.benefits.length > 0;
    }
}
