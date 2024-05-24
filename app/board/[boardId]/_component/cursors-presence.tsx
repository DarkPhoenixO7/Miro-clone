"use client";

import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";
import { memo } from "react";
import { Cursor } from "./cursor";
import { shallow } from "@liveblocks/client";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";


const Cursors = () => {
    const ids = useOthersConnectionIds();
  
    return (
      <>
        {ids.map((id) => (
          <Cursor key={id} connectionId={id} />
        ))}
      </>
    );
  };
  
  const Draft = () => {
    const others = useOthersMapped(
      (other) => ({
        pencilDraft: other.presence.pencilDraft,
        pencilColor: other.presence.penColor,
      }),
      shallow
    );
  
    return (
      <>
        {others.map(([key, other]) => {
          if (other.pencilDraft) {
            return (
              <Path
                key={key}
                x={0}
                y={0}
                points={other.pencilDraft}
                fill={other.pencilColor ? colorToCss(other.pencilColor) : "#000"}
              />
            );
          }
          return null;
        })}
      </>
    );
  };
  
  export const CursorPresence = memo(() => {
    return (
      <>
        <Draft />
        <Cursors />
      </>
    );
  });
  
  CursorPresence.displayName = "CursorPresence";