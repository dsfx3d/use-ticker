import {ITicker} from "./ITicker";
import {TTick} from "./TTick";
import {TTickerSubscription} from "./TTickerSubscription";

export class Ticker implements ITicker {
  private subscribers: TTickerSubscription[] = [];

  tick(payload: TTick) {
    for (const onTick of this.subscribers) {
      onTick(payload);
    }
  }

  subscribe(onTick: TTickerSubscription): () => void {
    this.subscribers.push(onTick);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== onTick);
    };
  }
}
