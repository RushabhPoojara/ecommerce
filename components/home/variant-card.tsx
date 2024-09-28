"use client"

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

interface VariantCardProps{
    variant: any;
    state: any;
    designs: any;
}

export const VariantCard: React.FC<VariantCardProps> = ({variant, state, designs}): React.JSX.Element => {
    const { onOpen } = useModal();

    return (
        <Card className='h-[20vh] w-full border-dashed p-4 bg-white dark:bg-neutral-800'>
            <CardContent className='h-full w-full flex justify-center items-center rounded p-0 relative'>
            {designs[state.id] && designs[state.id][variant] ? (
                <div className='flex items-center justify-center w-full h-full transition duration-200 rounded relative overflow-hidden'>
                    <Image
                        alt='img'
                        src={designs[state.id][variant].content}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            ) : (
                <div className='flex items-center justify-center w-full h-full transition duration-200 rounded relative overflow-hidden text-center text-muted-foreground/50'>
                  No Design Added
                </div>
            )}
            <div className='group absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0 hover:bg-opacity-45 transition duration-200 cursor-pointer rounded'>
                <Button 
                  variant={'outline'} 
                  className='hidden group-hover:block transition duration-200'
                  onClick={() => onOpen('addDisplayModal', state.id, variant)}
                >
                  Add
                </Button>
            </div>
            </CardContent>
        </Card>
    )
}