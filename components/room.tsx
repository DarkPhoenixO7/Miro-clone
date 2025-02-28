"use client";

import { RoomProvider } from "@/liveblocks.config";
import { Layer } from "@/types/canvas";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import  { ReactNode } from "react";

interface RoomProps{
    roomId: string,
    children: ReactNode,
    fallback: NonNullable<ReactNode> | null
}

export const Room = ({children,
    roomId,
    fallback
}: RoomProps)=>{
    return(
        <RoomProvider id={roomId} initialPresence={{cursor: null,
            selection: [],
            penColor: null,
            pencilDraft: null
        }}
         initialStorage={{
            layers: new LiveMap<string, LiveObject<Layer>>(),
            layerIds: new LiveList()
         }}
        >
            <ClientSideSuspense fallback={fallback}>
                {()=> children}
            </ClientSideSuspense>

        </RoomProvider>

    )
}