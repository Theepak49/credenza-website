/**
 * useCompanyData Hook
 * Custom hook for accessing company data
 */

"use client";

import { useState, useEffect } from "react";
import { container } from "@/infrastructure/di/container";
import {
    CompanyValueViewModel,
    WhyChooseUsViewModel,
    StatisticViewModel,
    CompanyViewModelMapper,
} from "../view-models/CompanyViewModel";

export function useCompanyData() {
    const [companyValues, setCompanyValues] = useState<CompanyValueViewModel[]>([]);
    const [whyChooseUs, setWhyChooseUs] = useState<WhyChooseUsViewModel[]>([]);
    const [statistics, setStatistics] = useState<StatisticViewModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCompanyData();
    }, []);

    const loadCompanyData = async () => {
        try {
            setLoading(true);
            setError(null);

            const useCase = container.getCompanyDataUseCase;

            const [valuesDTOs, whyChooseUsDTOs, statsDTOs] = await Promise.all([
                useCase.getCompanyValues(),
                useCase.getWhyChooseUs(),
                useCase.getStatistics(),
            ]);

            setCompanyValues(CompanyViewModelMapper.toCompanyValueViewModels(valuesDTOs));
            setWhyChooseUs(CompanyViewModelMapper.toWhyChooseUsViewModels(whyChooseUsDTOs));
            setStatistics(CompanyViewModelMapper.toStatisticViewModels(statsDTOs));
        } catch (err) {
            setError("Failed to load company data");
            console.error("Error loading company data:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        companyValues,
        whyChooseUs,
        statistics,
        loading,
        error,
        reload: loadCompanyData,
    };
}
