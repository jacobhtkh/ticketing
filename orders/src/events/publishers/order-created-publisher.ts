import { Publisher, OrderCreatedEvent, Subjects } from '@htkhtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
