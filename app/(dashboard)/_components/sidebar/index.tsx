import { List } from "./list"
import { NewButton } from "./new-button"

export const Sidebar = () =>{
    return(
        <aside className="fixed z-[1] left-0 bg-blue-950 text-white h-full w-[60px] p-3 flex-col gap-y-4" >
            
            <List />
            <NewButton />
        </aside>
    )
}