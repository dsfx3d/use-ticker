import {TTick} from "./TTick";

export type TTickerSubscription = (tick: TTick) => void;
