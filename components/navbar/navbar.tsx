"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { useModal } from "@/hooks/use-modal-store"

export const Navbar = (): React.JSX.Element => {
    const { onOpen } = useModal();

    return (
        <div className="h-[100px] w-full border-b border-muted-foreground/10 px-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <ArrowLeft/>
                <h1 className="font-semibold text-3xl underline decoration-[2px] underline-offset-[1rem]">Test 3_staging</h1>
                <Label className="border-[1px] text-blue-500 border-blue-500 bg-blue-500/10 p-1 rounded-full text-[12px] px-4">
                    Primary Feed
                </Label>
            </div>
            <Button
                onClick={() => onOpen('addDisplayModal', '', '')}
            >
                Publish Feed
            </Button>
        </div>
    )
}