"use client";
import { UserAvatar } from "@/components/user-avatar";
import { connectionIdToColor } from "@/lib/utils";
import { useOthers, useSelf } from "@/liveblocks.config"

const MAX_SHOWN_USERS = 2;
export const Participants = () =>{
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUser = users.length > MAX_SHOWN_USERS;

    return(
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {users.slice(0, MAX_SHOWN_USERS).map(({connectionId, info})=>{
                    return(
                        <UserAvatar 
                         borderColor={connectionIdToColor(connectionId)}
                         key={connectionId}
                         src={info?.picture}
                         name={info?.name}
                         fallback={info?.name?.[0]}
                        />
                    )
                })}
                {currentUser &&(
                    <UserAvatar
                      borderColor={connectionIdToColor(currentUser.connectionId)}
                      name={currentUser.info?.name}
                      src={`${currentUser.info?.picture}`}
                      fallback={currentUser.info?.name?.[0]}
                    />
                )}

                {hasMoreUser &&(
                    <UserAvatar 
                      name={`${users.length - MAX_SHOWN_USERS} More`}
                      fallback={`+${users.length - MAX_SHOWN_USERS}`}
                    />
                )}

            </div>
        </div>
    )
}

export const ParticipantsSkeleton = ()=>{
    return(
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]">
            
        </div>
    )
}