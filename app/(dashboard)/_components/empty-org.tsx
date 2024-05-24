import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import Image from "next/image"

export const EmptyOrg = () =>{
    return(
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
             src="/elements.svg" 
             alt="Empty organization"
             height={200}
             width={200}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to board
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}