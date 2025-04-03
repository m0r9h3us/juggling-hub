import { Dayjs } from 'dayjs'

import { AddressModel } from './address.model'

export type EventModel = {
    id: string
    title: string
    start: Dayjs
    end: Dayjs
    location: AddressModel
    description: string
    websites: Array<string>
}
