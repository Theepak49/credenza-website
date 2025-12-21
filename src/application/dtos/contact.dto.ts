/**
 * Contact Data Transfer Objects
 */

export interface ContactFormDTO {
    name: string;
    email: string;
    phone?: string;
    message: string;
    service?: string;
}

export interface FeedbackFormDTO {
    name: string;
    email: string;
    rating: number;
    feedback: string;
}

export interface ContactSubmissionResult {
    success: boolean;
    message: string;
    errors?: Record<string, string>;
}
