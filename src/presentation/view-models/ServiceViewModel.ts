/**
 * Service View Model
 * Transforms service DTOs for presentation
 */

import { ServiceDTO } from "@/application/dtos/service.dto";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceViewModel {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
    link: string;
    category: string;
    features?: string[];
    benefits?: string[];
}

export class ServiceViewModelMapper {
    static toViewModel(dto: ServiceDTO): ServiceViewModel {
        return {
            id: dto.id,
            title: dto.title,
            description: dto.description,
            icon: this.getIconComponent(dto.iconName),
            image: dto.image,
            link: dto.link,
            category: dto.category,
            features: dto.features,
            benefits: dto.benefits,
        };
    }

    static toViewModels(dtos: ServiceDTO[]): ServiceViewModel[] {
        return dtos.map((dto) => this.toViewModel(dto));
    }

    private static getIconComponent(iconName: string): LucideIcon {
        // Map icon name to actual icon component
        const iconMap: Record<string, LucideIcon> = {
            Building2: Icons.Building2,
            Globe: Icons.Globe,
            FileText: Icons.FileText,
            Stamp: Icons.Stamp,
            Scale: Icons.Scale,
            Briefcase: Icons.Briefcase,
        };

        return iconMap[iconName] || Icons.Circle;
    }
}
