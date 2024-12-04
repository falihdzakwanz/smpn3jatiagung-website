export type FieldType = 'text' | 'textarea' | 'image' | 'file';

export interface FormField {
    key: string;
    label: string;
    type: FieldType;
    placeholder?: string;
}

export interface Column {
    key: string;
    label: string;
    type?: FieldType;
    width?: string;
}

export interface BaseItem {
    id: number;
    [key: string]: any;
}