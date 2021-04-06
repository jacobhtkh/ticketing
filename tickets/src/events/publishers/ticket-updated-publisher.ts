import { Publisher, Subjects, TicketUpdatedEvent } from '@htkhtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
