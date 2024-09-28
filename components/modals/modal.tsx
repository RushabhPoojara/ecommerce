"use client"

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import React from "react";

interface ModalProps {
    title?: string;
    description?: string;
    currentStep?: number;
    totalSteps?: number; 
    isOpen?: boolean;
    onClose?: () => void;
    onSubmit?: () => void;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
    actionLabelVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | undefined;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    description,
    body,
    actionLabel,
    disabled,
    secondaryAction,
    actionLabelVariant = 'default',
    secondaryActionLabel,
}): React.JSX.Element | null => {
    
    if (!isOpen) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="overflow-hidden">
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div>
                    {body}
                </div>

                <DialogFooter className="gap-2">
                    {secondaryActionLabel && (
                        <Button 
                            className="w-full"
                            variant={'outline'} 
                            onClick={secondaryAction}
                            disabled={disabled}
                        >
                            {secondaryActionLabel}
                        </Button>
                    )}
                    {actionLabel && (
                        <Button 
                            className="w-full"
                            variant={actionLabelVariant} 
                            onClick={onSubmit}
                            disabled={disabled}
                        >
                            {actionLabel}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}