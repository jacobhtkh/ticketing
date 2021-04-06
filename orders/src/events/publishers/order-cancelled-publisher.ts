import { Publisher, OrderCancelledEvent, Subjects } from '@htkhtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
