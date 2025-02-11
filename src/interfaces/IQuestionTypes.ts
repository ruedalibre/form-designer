import { IBaseQuestion, ICheckboxOption } from "../Interfaces/IBaseQuestion";

export interface TextQuestion extends IBaseQuestion {
    type: "text";
    value: string;
}

export interface AttachmentQuestion extends IBaseQuestion {
    type: "attachment";
    value: File;
}

export interface CheckboxQuestion extends IBaseQuestion {
    type: "checkbox";
    options: ICheckboxOption[];
}

export interface DateQuestion extends IBaseQuestion {
    type: "date";
    value: Date;
}

export interface DateTimeQuestion extends IBaseQuestion {
    type: "datetime";
    value: Date;
}

export interface DropdownQuestion extends IBaseQuestion {
    type: "dropdown";
    options: string[];
    value: string;
}

export interface EmailQuestion extends IBaseQuestion {
    type: "email";
    value: string;
}

export interface NumberQuestion extends IBaseQuestion {
    type: "number";
    value: number;
}

export interface PasswordQuestion extends IBaseQuestion {
    type: "password";
    value: string;
}

export interface RadioQuestion extends IBaseQuestion {
    type: "radio";
    options: string[];
    value: string;
}

export interface ResetQuestion extends IBaseQuestion {
    type: "reset";
}