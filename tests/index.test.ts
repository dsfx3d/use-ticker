/* eslint-disable max-nested-callbacks */
import {act, renderHook} from "@testing-library/react-hooks/native";
import {describe, expect, it} from "vitest";
import {useTicker} from "../src";

describe(useTicker.name, () => {
  it("can add subscribers", async () => {
    const {result} = renderHook(() => useTicker(1));

    await act(
      () =>
        new Promise<void>(resolve => {
          let i = 0;
          result.current.subscribe(() => {
            ++i > 5 && resolve();
          });
        }),
    );

    expect(true).toBe(true);
  });

  it("allows unsubscribing", async () => {
    const {result} = renderHook(() => useTicker(100));
    let i = 0;

    await act(
      () =>
        new Promise<void>(resolve => {
          const unsubscribe = result.current.subscribe(() => {
            if (++i === 5) {
              unsubscribe();
              resolve();
            }
          });
        }),
    );
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(i).toBe(5);
  });
});
