/**
 * Contact Service Interface
 * Defines the contract for contact and communication operations
 */

import { ContactFormData, FeedbackFormData } from "../entities/types";

export interface IContactService {
    /**
     * Submit a contact form
     */
    submitContactForm(data: ContactFormData): Promise<boolean>;

    /**
     * Submit feedback
     */
    submitFeedback(data: FeedbackFormData): Promise<boolean>;

    /**
     * Send WhatsApp message
     */
    sendWhatsAppMessage(message: string): Promise<void>;
}
