"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

interface ConfirmModalProps{
    children: React.ReactNode,
    onConfirm: ()=> void,
    disbaled?: boolean,
    header: string,
    description?: string
}

export const ConfirmModal = ({
    children,
    onConfirm,
    disbaled,
    header,
    description
}:ConfirmModalProps) =>{
    const handleConfirm = ()=>{
        onConfirm();
    }
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}

            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction disabled={disbaled}
                     onClick={handleConfirm}
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}