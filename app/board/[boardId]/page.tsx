import { Room } from "@/components/room";
import { Canvas } from "./_component/canvas";
import { Loading } from "./_component/loading";

interface BoardIdPageProps{
    params:{
        boardId: string;
    }
}

 const BoardIdPage=({params}:BoardIdPageProps) =>{
    return(
        <div className="w-full h-full">
            <Room roomId={params.boardId} fallback={<Loading />} >
                <Canvas boardId={params.boardId} />

            </Room>

        </div>
    )
}

export default BoardIdPage;