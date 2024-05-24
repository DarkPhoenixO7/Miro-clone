"use client";
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoard = () =>{
    const router = useRouter();
    const {organization} = useOrganization();
    const {mutate, pending} = useApiMutation(api.board.create);

    const onClick = () =>{
        if(!organization) return;
        mutate({
            orgId: organization.id,
            title: "untitled"
        })
        .then((id)=>{
            toast.success("Board Created");
            router.push(`/board/${id}`);
        })
        .catch(()=>toast.error("Failed to create board"));
    }
    return(
        <div className="flex flex-col h-full w-full justify-center items-center">
            <Image 
              src="/note.svg"
              alt="Empty"
              height={110}
              width={110}
            />
            <h2 className="text-2xl font-semibold mt-6">
                create your first board 
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>

            </div>


        </div>
    )
}