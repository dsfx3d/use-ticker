import {TTickerSubscription} from "./TTickerSubscription";

export interface ITicker {
  subscribe(sub: TTickerSubscription): () => void;
}
