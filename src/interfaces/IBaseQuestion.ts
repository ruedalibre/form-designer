export interface IBaseQuestion {
    id: string;
    label?: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    description?: string;
    options?: string[];
    title: string;
    warning: string;
    errorMessage: string;
    disabled?: boolean;
    hidden?: boolean;
    validation?: {
        pattern?: RegExp;
        minLength?: number;
        maxLength?: number;
    };
    disabledOptions?: string[];
    showDescription?: boolean;
    showWarning?: boolean;
    showErrorMessage?: boolean;
    showLabel?: boolean;
    showTitle?: boolean;
    showValidation?: boolean;

    // Methods
    validate(): boolean;
    reset(): void;
    updateValue(value: unknown): void;
    getValue(): unknown;
    getError(): string;
    getWarning(): string;
    getErrorMessage(): string;
    getLabel(): string;
    getPlaceholder(): string;
    getDescription(): string;
    getTitle(): string;
    getOptions(): string[];
    getValidationPattern(): RegExp;
    getMinLength(): number;
    getMaxLength(): number;
    isRequired(): boolean;
    isDisabled(): boolean;
    isHidden(): boolean;
    hasValidation(): boolean;
    hasDescription(): boolean;
    hasWarning(): boolean;
    hasErrorMessage(): boolean;
    hasLabel(): boolean;
    hasTitle(): boolean;
    hasValidationPattern(): boolean;
    hasMinLength(): boolean;
    hasMaxLength(): boolean;
}