/**
 * useContactForm Hook
 * Custom hook for contact form logic
 */

"use client";

import { useState } from "react";
import { container } from "@/infrastructure/di/container";
import { ContactFormDTO } from "@/application/dtos/contact.dto";

export function useContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const submitForm = async (formData: ContactFormDTO) => {
        try {
            setSubmitting(true);
            setSuccess(false);
            setError(null);
            setFieldErrors({});

            const useCase = container.submitContactFormUseCase;
            const result = await useCase.execute(formData);

            if (result.success) {
                setSuccess(true);
                return true;
            } else {
                setError(result.message);
                if (result.errors) {
                    setFieldErrors(result.errors);
                }
                return false;
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
            console.error("Error submitting contact form:", err);
            return false;
        } finally {
            setSubmitting(false);
        }
    };

    const reset = () => {
        setSubmitting(false);
        setSuccess(false);
        setError(null);
        setFieldErrors({});
    };

    return {
        submitForm,
        submitting,
        success,
        error,
        fieldErrors,
        reset,
    };
}
