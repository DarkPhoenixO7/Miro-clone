"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import {formatDistanceToNow} from "date-fns";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import {  Actions } from "@/components/action";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps{
    id: string,
    title: string,
    authorName?: string,
    imageUrl: string,
    authorId: string,
    createdAt: number,
    orgId: string,
    isFavorite: boolean

}

export const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    imageUrl,
    isFavorite,
    orgId,
    createdAt
}:BoardCardProps) =>{
    const {userId} = useAuth();
    const authorLabel = userId === authorId? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt,{
        addSuffix:true,
    });

    const {
        mutate: onFavorite,
        pending:pendingFavorite
    } = useApiMutation(api.board.favorite);

    const {
        mutate: onUnFavorite,
        pending:pendingUnFavorite
    } = useApiMutation(api.board.unFavorite);

    const handleFavorite = () =>{
        if(isFavorite){
            onUnFavorite({id})
            .catch(()=> toast.error("Failed to unfavorite"));
        }
        else{
            onFavorite({id, orgId})
            .catch(()=> toast.error("Failed to favorite"));
        }
    }
    
    return(
        <Link href={`board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col h-full w-full justify-between overflow-hidden ">
                <div className="relative flex-1 h-full w-full bg-amber-50">
                    <Image 
                     src={imageUrl}
                     fill
                     alt={title}
                     className="object-fit"
                    />
                    <Overlay />
                    <Actions
                     id={id}
                     title={title}
                     side="right"

                    >
                        <button className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 px-3 py-2 outline-none">
                            <MoreHorizontal className="opacity-75 text-white hover:opacity-100 transition-opacity" />
                        </button>
                    </Actions>

                </div>
                <Footer
                  isFavorite={isFavorite}
                  title={title}
                  authorLabel={authorLabel}
                  createdAtLabel={createdAtLabel} 
                  onClick={handleFavorite}
                  disabled={pendingFavorite || pendingUnFavorite}
                />

            </div>
        </Link>
    )
}

BoardCard.Skeleton = function BoardCardSkeleton(){
    return(
        <div className="aspect-[100/127] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
        </div>
    )
}