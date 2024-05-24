"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export const NewButton = () =>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square mt-4">
                    <Hint label="Create Organization"
                     align="start"
                     side="right"
                     sideOffset={18}
                    >
                    <button className="bg-white/25 h-full w-full flex items-center justify-center 
                    rounded-md opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white" />
                    </button>
                    </Hint>

                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-width-[480px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}