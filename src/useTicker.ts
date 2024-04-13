import {ITicker} from "./ITicker";
import {bind} from "./bind";
import {useEffect} from "react";
import {usePubSub} from "./usePubSub";

export function useTicker(tickMs: number = 1000): ITicker {
  const {publish, subscribe} = usePubSub();
  const tick = bind(publish, {tickMs});
  const startTicking = bind(setInterval, tick, tickMs);
  useEffect(() => bind(clearInterval, startTicking()), [startTicking]);
  return {subscribe};
}
