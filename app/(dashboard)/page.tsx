"use client";
import {UserButton, useOrganization} from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps{
    searchParams:{
        search?:string,
        favorites?:string
    };
};
const DashboardPage = ({
searchParams
}:DashboardPageProps) =>{
    const {organization} = useOrganization();
    return(
        <div className="flex flex-1 gap-y-4 h-[calc(100%-80px)] w-full p-6">
            
            {!organization? (
                <EmptyOrg />
            ):(
                <BoardList
                  orgId={organization.id}
                  query={searchParams}
                />
            )}
            
            
            
        </div>
    )
}

export default DashboardPage;