import { Expose } from 'class-transformer';

export interface LocationInterface {
    name?: string;
    street?: string;
    houseNumber?: string;
    zipCode?: string;
    city?: string;
    country: string;
    latitude: number;
    longitude: number;
}

export class LocationDto implements LocationInterface {
    @Expose()
    name?: string;

    @Expose()
    street?: string;

    @Expose()
    houseNumber?: string;

    @Expose()
    zipCode?: string;

    @Expose()
    city?: string;

    @Expose()
    country: string;

    @Expose()
    latitude: number;

    @Expose()
    longitude: number;

    constructor(location: LocationInterface) {
        this.name = location.name;
        this.street = location.street;
        this.houseNumber = location.houseNumber;
        this.zipCode = location.zipCode;
        this.city = location.city;
        this.country = location.country;
        this.longitude = location.longitude;
        this.latitude = location.latitude;
    }
}
