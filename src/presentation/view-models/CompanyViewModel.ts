/**
 * Company View Model
 * Transforms company DTOs for presentation
 */

import { CompanyValueDTO, WhyChooseUsDTO, StatisticDTO } from "@/application/dtos/company.dto";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface CompanyValueViewModel {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface WhyChooseUsViewModel {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface StatisticViewModel {
    id: string;
    value: string;
    label: string;
}

export class CompanyViewModelMapper {
    static toCompanyValueViewModel(dto: CompanyValueDTO): CompanyValueViewModel {
        return {
            id: dto.id,
            icon: this.getIconComponent(dto.iconName),
            title: dto.title,
            description: dto.description,
        };
    }

    static toWhyChooseUsViewModel(dto: WhyChooseUsDTO): WhyChooseUsViewModel {
        return {
            id: dto.id,
            icon: this.getIconComponent(dto.iconName),
            title: dto.title,
            description: dto.description,
        };
    }

    static toStatisticViewModel(dto: StatisticDTO): StatisticViewModel {
        return {
            id: dto.id,
            value: dto.value,
            label: dto.label,
        };
    }

    static toCompanyValueViewModels(dtos: CompanyValueDTO[]): CompanyValueViewModel[] {
        return dtos.map((dto) => this.toCompanyValueViewModel(dto));
    }

    static toWhyChooseUsViewModels(dtos: WhyChooseUsDTO[]): WhyChooseUsViewModel[] {
        return dtos.map((dto) => this.toWhyChooseUsViewModel(dto));
    }

    static toStatisticViewModels(dtos: StatisticDTO[]): StatisticViewModel[] {
        return dtos.map((dto) => this.toStatisticViewModel(dto));
    }

    private static getIconComponent(iconName: string): LucideIcon {
        // Map icon name to actual icon component
        const iconMap: Record<string, LucideIcon> = {
            User: Icons.User,
            Shield: Icons.Shield,
            Scale: Icons.Scale,
            Lightbulb: Icons.Lightbulb,
            Handshake: Icons.Handshake,
            Award: Icons.Award,
            CheckCircle: Icons.CheckCircle,
            Clock: Icons.Clock,
            Target: Icons.Target,
        };

        return iconMap[iconName] || Icons.Circle;
    }
}
