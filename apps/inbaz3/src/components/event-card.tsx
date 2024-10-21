import React from 'react'
import { Card, CardHeader, CardFooter, CardContent, Button } from '@inbaz3/primitives'
import dayjs from 'dayjs'

export type EventCardProps = {
    title: string
    start: dayjs.Dayjs
    end: dayjs.Dayjs
    city: string
    country: string
    description: string
}

export const EventCard: React.FC<EventCardProps> = (props: EventCardProps) => {
    const { title, start, end, city, country, description } = props
    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardContent>
                <p>
                    <strong>Start:</strong> {start.toString()}
                </p>
                <p>
                    <strong>End:</strong> {end.toString()}
                </p>
                <p>
                    <strong>Location:</strong> {city}, {country}
                </p>
                <p>{description}</p>
            </CardContent>
            <CardFooter>
                <Button>Learn More</Button>
            </CardFooter>
        </Card>
    )
}
