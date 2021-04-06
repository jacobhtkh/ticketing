import { Subjects, Publisher, PaymentCreatedEvent } from '@htkhtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
