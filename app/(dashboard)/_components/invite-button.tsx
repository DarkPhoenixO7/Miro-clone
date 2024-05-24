import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { Plus } from "lucide-react"


export const InviteButton = () =>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus  className="w-4 h-4 mr-2"/>
                    Invite member
                </Button>

            </DialogTrigger>
            <DialogContent className="p-0 transparent border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}