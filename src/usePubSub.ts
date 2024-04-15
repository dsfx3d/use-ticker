import {TTick} from "./TTick";
import {TTickerSubscription} from "./TTickerSubscription";
import {bind} from "./bind";
import {useMemo, useState} from "react";

type TUsePubSub = {
  publish(tick: TTick): void;
  subscribe(onTick: TTickerSubscription): () => void;
};

export function usePubSub(): TUsePubSub {
  const [subscribers, setSubscribers] = useState<TTickerSubscription[]>([]);
  const pubsub: TUsePubSub = {
    publish(tick) {
      for (const onTick of subscribers) {
        onTick(tick);
      }
    },
    subscribe(onTick) {
      subscribers.push(onTick);
      return bind(setSubscribers, subscriptions =>
        subscriptions.filter(sub => sub !== onTick),
      );
    },
  };
  return useMemo(() => pubsub, [subscribers]);
}
