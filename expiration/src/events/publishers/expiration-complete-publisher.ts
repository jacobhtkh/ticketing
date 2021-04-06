import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@htkhtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
