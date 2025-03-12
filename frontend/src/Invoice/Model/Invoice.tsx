import { Entity } from './Entity'

export interface Invoice{
    invoiceNumber: number,
    invoiceDate: string,
    dueDate: string,
    invoiceIssuer: Entity,
    invoiceRecipient: Entity,
}