import { Exclude, Expose, plainToInstance, Transform } from 'class-transformer';
import {
    IsInt,
    IsUrl,
    IsString,
    IsLatitude,
    IsArray,
    IsLongitude,
    IsDateString,
    IsOptional
} from 'class-validator';

@Exclude()
class JugglingEdgeBackendDto {
    @Expose({ name: 'EdgeListing' })
    @IsUrl()
    edgeListing!: string;

    @Expose({ name: 'EventID' })
    @IsInt()
    eventID!: number;

    @Expose({ name: 'FullTitle' })
    @IsString()
    fullTitle!: string;

    @Expose({ name: 'ShortTitle' })
    @IsString()
    shortTitle!: string;

    @Expose({ name: 'Tag' })
    @IsString()
    tag!: string;

    @Expose({ name: 'Blurb' })
    @IsString()
    blurb!: string;

    @Expose({ name: 'Address' })
    @IsString()
    address!: string;

    @Expose({ name: 'StartDate' })
    @IsDateString()
    startDate!: string;

    @Expose({ name: 'Duration' })
    @IsInt()
    duration!: number;

    @Expose({ name: 'StartTime' })
    @IsOptional()
    @IsString()
    startTime!: string;

    @Expose({ name: 'EndTime' })
    @IsOptional()
    @IsString()
    endTime!: string;

    @Expose({ name: 'URL' })
    @Transform(({ value }) => value.split('\n'))
    @IsArray()
    urls!: Array<string>;

    @Expose({ name: 'Country' })
    @IsString()
    country!: string;

    @Expose({ name: 'Lat' })
    @IsLatitude()
    lat!: number;

    @Expose({ name: 'Lng' })
    @IsLongitude()
    lng!: number;

    @Expose({ name: 'LastEdit' })
    @IsDateString()
    lastEdit!: string;

    @Expose({ name: 'Status' })
    @IsInt()
    status!: number;

    @Expose({ name: 'Cancelled' })
    @IsInt()
    cancelled!: number;
}

export const transformToBackendData = (data: Array<unknown>) => {
    return plainToInstance(JugglingEdgeBackendDto, data);
};
