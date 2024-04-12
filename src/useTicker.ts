import {ITicker} from "./ITicker";
import {Ticker} from "./Ticker";
import {add} from "./add";
import {bind} from "./bind";
import {pipe} from "./pipe";
import {useEffect, useState} from "react";

export function useTicker(tickMs: number = 1000): ITicker {
  const [elapsedMs, setElapsed] = useState(0);
  const [ticker] = useState(new Ticker());
  const nudgeElapsed = bind(pipe, tickMs, add, setElapsed);
  const tick = bind(setTimeout, () => ticker.tick({elapsedMs}), tickMs);
  useEffect(() => ticker.subscribe(nudgeElapsed), []);
  useEffect(() => bind(clearInterval, tick()), [tick]);
  return ticker;
}
