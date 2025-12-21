/**
 * Submit Contact Form Use Case
 * Handles contact form submission with validation
 */

import { IContactService } from "@/domain/interfaces/IContactService";
import { ContactFormDTO, ContactSubmissionResult } from "../dtos/contact.dto";
import { ContactFormData } from "@/domain/entities/types";

export class SubmitContactFormUseCase {
    constructor(private contactService: IContactService) { }

    async execute(formData: ContactFormDTO): Promise<ContactSubmissionResult> {
        // Validate form data
        const validationErrors = this.validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            return {
                success: false,
                message: "Please fix the validation errors",
                errors: validationErrors,
            };
        }

        // Map DTO to domain entity
        const contactData: ContactFormData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            service: formData.service,
        };

        try {
            const success = await this.contactService.submitContactForm(contactData);

            if (success) {
                return {
                    success: true,
                    message: "Thank you for contacting us! We'll get back to you soon.",
                };
            } else {
                return {
                    success: false,
                    message: "Failed to submit the form. Please try again.",
                };
            }
        } catch (error) {
            return {
                success: false,
                message: "An error occurred. Please try again later.",
            };
        }
    }

    private validate(formData: ContactFormDTO): Record<string, string> {
        const errors: Record<string, string> = {};

        if (!formData.name || formData.name.trim() === "") {
            errors.name = "Name is required";
        }

        if (!formData.email || formData.email.trim() === "") {
            errors.email = "Email is required";
        } else if (!this.isValidEmail(formData.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!formData.message || formData.message.trim() === "") {
            errors.message = "Message is required";
        } else if (formData.message.length < 10) {
            errors.message = "Message must be at least 10 characters long";
        }

        return errors;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
