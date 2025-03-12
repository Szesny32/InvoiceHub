import { Address } from './Adress'

export interface Entity{
    name: string,
    address: Address,
    taxID?: string
}   