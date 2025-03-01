export interface IBaseQuestion {
    id: string;
    type: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
    description?: string;
    options?: string[] | ICheckboxOption[];
    title?: string;
    validation?: {
        pattern?: RegExp;
        minLength?: number;
        maxLength?: number;
        errorMessage?: string;
    };

    validate?(): boolean;
    reset?(): void;
    updateValue(value: unknown): void;
    getValue(): unknown;
}

export interface ICheckboxOption {
    checked: boolean;
    label: string;
    value: boolean;
}
