# Clean Code Architecture - Credenza Website

This document explains the clean code architecture implementation for the Credenza Business Consultancy website.

## Architecture Overview

The project follows **Uncle Bob's Clean Architecture** principles with four distinct layers:

```
┌─────────────────────────────────────────────┐
│           Presentation Layer                │
│   (UI Components, Hooks, View Models)       │
├─────────────────────────────────────────────┤
│         Infrastructure Layer                │
│  (Repositories, Services, Data Sources)     │
├─────────────────────────────────────────────┤
│          Application Layer                  │
│      (Use Cases, DTOs, Mappers)             │
├─────────────────────────────────────────────┤
│            Domain Layer                     │
│   (Entities, Interfaces, Business Rules)    │
└─────────────────────────────────────────────┘
```

## Layer Responsibilities

### 1. Domain Layer (`src/domain/`)

**Purpose**: Contains the core business logic and rules, independent of any framework or external dependencies.

**Components**:
- **Entities** (`entities/`): Core business objects with validation and business rules
  - `types.ts`: Interface definitions for all domain entities
  - `service.entity.ts`: Service entity with business logic
  
- **Interfaces** (`interfaces/`): Contracts that outer layers must implement
  - `IServiceRepository.ts`: Service data access contract
  - `IContactService.ts`: Contact/communication contract
  - `ICompanyDataRepository.ts`: Company data access contract

**Key Principle**: The domain layer has NO dependencies on other layers.

### 2. Application Layer (`src/application/`)

**Purpose**: Contains application-specific business rules and orchestrates the flow of data.

**Components**:
- **Use Cases** (`use-cases/`): Application-specific business logic
  - `GetFeaturedServices.usecase.ts`: Retrieve featured services
  - `GetAllServices.usecase.ts`: Retrieve all services with filtering
  - `SubmitContactForm.usecase.ts`: Handle contact form submission
  - `GetCompanyData.usecase.ts`: Retrieve company information

- **DTOs** (`dtos/`): Data Transfer Objects for layer communication
  - `service.dto.ts`: Service data transfer objects
  - `contact.dto.ts`: Contact form DTOs
  - `company.dto.ts`: Company data DTOs

**Dependencies**: Only depends on the Domain layer.

### 3. Infrastructure Layer (`src/infrastructure/`)

**Purpose**: Implements interfaces defined in the domain layer and handles external concerns.

**Components**:
- **Repositories** (`repositories/`): Concrete implementations of repository interfaces
  - `ServiceRepository.ts`: Service data access implementation
  - `CompanyDataRepository.ts`: Company data access implementation

- **Services** (`services/`): External service implementations
  - `ContactService.ts`: Contact/email service implementation

- **Data** (`data/`): Static data sources (can be replaced with API calls)
  - `serviceData.ts`: Service data
  - `companyData.ts`: Company information data

- **Dependency Injection** (`di/`): Manages all dependencies
  - `container.ts`: DI container using singleton pattern

**Dependencies**: Depends on Domain and Application layers.

### 4. Presentation Layer (`src/presentation/`)

**Purpose**: Handles UI presentation logic and user interactions.

**Components**:
- **View Models** (`view-models/`): Transform DTOs for UI presentation
  - `ServiceViewModel.ts`: Service presentation logic
  - `CompanyViewModel.ts`: Company data presentation logic

- **Hooks** (`hooks/`): Custom React hooks for accessing use cases
  - `useServices.hook.ts`: Service data access hook
  - `useCompanyData.hook.ts`: Company data access hook
  - `useContactForm.hook.ts`: Contact form logic hook

**Dependencies**: Depends on Application and Infrastructure layers (via DI container).

## Dependency Flow

```
Presentation → Infrastructure → Application → Domain
     ↓              ↓               ↓
   Hooks    →   Container   →   Use Cases  →  Entities
     ↓              ↓               ↓
View Models  → Repositories  →    DTOs     → Interfaces
```

**Key Rule**: Dependencies point INWARD. Inner layers never depend on outer layers.

## Path Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
@/domain/*          → src/domain/*
@/application/*     → src/application/*
@/infrastructure/*  → src/infrastructure/*
@/presentation/*    → src/presentation/*
@/components/*      → src/components/*
@/lib/*             → src/lib/*
```

## Usage Examples

### Using Services in a Component

```typescript
"use client";

import { useServices } from "@/presentation/hooks/useServices.hook";

export default function MyComponent() {
  const { featuredServices, loading, error } = useServices();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {featuredServices.map(service => (
        <div key={service.id}>{service.title}</div>
      ))}
    </div>
  );
}
```

### Using Contact Form

```typescript
"use client";

import { useContactForm } from "@/presentation/hooks/useContactForm.hook";

export default function ContactPage() {
  const { submitForm, submitting, success, error } = useContactForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    await submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

## Benefits

1. **Testability**: Each layer can be tested independently
2. **Maintainability**: Clear separation of concerns
3. **Scalability**: Easy to add new features without affecting existing code
4. **Flexibility**: Easy to swap implementations (e.g., replace static data with API calls)
5. **Independence**: Business logic is independent of frameworks and UI

## Future Enhancements

1. **API Integration**: Replace static data sources with actual API calls
2. **State Management**: Add Redux/Zustand if needed for complex state
3. **Caching**: Implement caching layer in repositories
4. **Error Handling**: Add centralized error handling
5. **Logging**: Add logging service for debugging
6. **Testing**: Add unit tests for each layer

## Migration from Static Data to API

To replace static data with API calls:

1. Update repository implementations in `src/infrastructure/repositories/`
2. Replace data imports with API client calls
3. No changes needed in domain, application, or presentation layers!

Example:
```typescript
// Before (static data)
import { servicesData } from "../data/serviceData";

// After (API)
import { apiClient } from "../api/client";

async getAll(): Promise<Service[]> {
  const response = await apiClient.get('/services');
  return response.data.map(this.mapToEntity);
}
```

## Conclusion

This architecture provides a solid foundation for building scalable, maintainable applications. The clear separation of concerns makes it easy to understand, test, and extend the codebase.
