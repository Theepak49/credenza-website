/**
 * useServices Hook
 * Custom hook for accessing service use cases
 */

"use client";

import { useState, useEffect } from "react";
import { container } from "@/infrastructure/di/container";
import { ServiceViewModel, ServiceViewModelMapper } from "../view-models/ServiceViewModel";
import { ServiceCategory } from "@/domain/entities/types";

export function useServices() {
    const [featuredServices, setFeaturedServices] = useState<ServiceViewModel[]>([]);
    const [allServices, setAllServices] = useState<ServiceViewModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            setLoading(true);
            setError(null);

            const getFeaturedUseCase = container.getFeaturedServicesUseCase;
            const getAllUseCase = container.getAllServicesUseCase;

            const [featuredDTOs, allDTOs] = await Promise.all([
                getFeaturedUseCase.execute(),
                getAllUseCase.execute(),
            ]);

            setFeaturedServices(ServiceViewModelMapper.toViewModels(featuredDTOs));
            setAllServices(ServiceViewModelMapper.toViewModels(allDTOs));
        } catch (err) {
            setError("Failed to load services");
            console.error("Error loading services:", err);
        } finally {
            setLoading(false);
        }
    };

    const getServicesByCategory = async (category: ServiceCategory): Promise<ServiceViewModel[]> => {
        try {
            const getAllUseCase = container.getAllServicesUseCase;
            const dtos = await getAllUseCase.execute(category);
            return ServiceViewModelMapper.toViewModels(dtos);
        } catch (err) {
            console.error("Error loading services by category:", err);
            return [];
        }
    };

    return {
        featuredServices,
        allServices,
        loading,
        error,
        getServicesByCategory,
        reload: loadServices,
    };
}
