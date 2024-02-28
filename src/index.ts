// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { CalenthorApi, EventItem, Duration, MILLISECONDS_IN_A_DAY, RecurrenceFrequency } from 'calenthor-lib';

const calendar = new CalenthorApi();

const event: EventItem = {
    title: 'Meeting',
    start: new Date('2024-12-01T10:00:00'),
    duration: new Duration(MILLISECONDS_IN_A_DAY),
    recurrenceRule: {
        frequency: RecurrenceFrequency.DAILY,
        interval: 1,
        count: null,
        endDate: null,
    },
};

calendar.createEvent(event);

console.log(calendar.listEvents({
    start: new Date('2024-12-01T00:00:00'),
    end: new Date('2024-12-06T00:00:00'),
}));
