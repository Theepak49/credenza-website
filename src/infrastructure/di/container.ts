/**
 * Dependency Injection Container
 * Manages all application dependencies
 */

import { IServiceRepository } from "@/domain/interfaces/IServiceRepository";
import { IContactService } from "@/domain/interfaces/IContactService";
import { ICompanyDataRepository } from "@/domain/interfaces/ICompanyDataRepository";

import { ServiceRepository } from "../repositories/ServiceRepository";
import { CompanyDataRepository } from "../repositories/CompanyDataRepository";
import { ContactService } from "../services/ContactService";

import { GetFeaturedServicesUseCase } from "@/application/use-cases/GetFeaturedServices.usecase";
import { GetAllServicesUseCase } from "@/application/use-cases/GetAllServices.usecase";
import { SubmitContactFormUseCase } from "@/application/use-cases/SubmitContactForm.usecase";
import { GetCompanyDataUseCase } from "@/application/use-cases/GetCompanyData.usecase";

/**
 * Dependency Injection Container
 * Singleton pattern for managing dependencies
 */
class DIContainer {
    private static instance: DIContainer;

    // Repositories
    private _serviceRepository?: IServiceRepository;
    private _companyDataRepository?: ICompanyDataRepository;

    // Services
    private _contactService?: IContactService;

    // Use Cases
    private _getFeaturedServicesUseCase?: GetFeaturedServicesUseCase;
    private _getAllServicesUseCase?: GetAllServicesUseCase;
    private _submitContactFormUseCase?: SubmitContactFormUseCase;
    private _getCompanyDataUseCase?: GetCompanyDataUseCase;

    private constructor() { }

    public static getInstance(): DIContainer {
        if (!DIContainer.instance) {
            DIContainer.instance = new DIContainer();
        }
        return DIContainer.instance;
    }

    // Repository Getters
    get serviceRepository(): IServiceRepository {
        if (!this._serviceRepository) {
            this._serviceRepository = new ServiceRepository();
        }
        return this._serviceRepository;
    }

    get companyDataRepository(): ICompanyDataRepository {
        if (!this._companyDataRepository) {
            this._companyDataRepository = new CompanyDataRepository();
        }
        return this._companyDataRepository;
    }

    // Service Getters
    get contactService(): IContactService {
        if (!this._contactService) {
            this._contactService = new ContactService();
        }
        return this._contactService;
    }

    // Use Case Getters
    get getFeaturedServicesUseCase(): GetFeaturedServicesUseCase {
        if (!this._getFeaturedServicesUseCase) {
            this._getFeaturedServicesUseCase = new GetFeaturedServicesUseCase(
                this.serviceRepository
            );
        }
        return this._getFeaturedServicesUseCase;
    }

    get getAllServicesUseCase(): GetAllServicesUseCase {
        if (!this._getAllServicesUseCase) {
            this._getAllServicesUseCase = new GetAllServicesUseCase(
                this.serviceRepository
            );
        }
        return this._getAllServicesUseCase;
    }

    get submitContactFormUseCase(): SubmitContactFormUseCase {
        if (!this._submitContactFormUseCase) {
            this._submitContactFormUseCase = new SubmitContactFormUseCase(
                this.contactService
            );
        }
        return this._submitContactFormUseCase;
    }

    get getCompanyDataUseCase(): GetCompanyDataUseCase {
        if (!this._getCompanyDataUseCase) {
            this._getCompanyDataUseCase = new GetCompanyDataUseCase(
                this.companyDataRepository
            );
        }
        return this._getCompanyDataUseCase;
    }
}

// Export singleton instance
export const container = DIContainer.getInstance();
