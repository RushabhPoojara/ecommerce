"use client";

import useTableStore from '@/hooks/use-table-store';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Grip, Plus, Trash, Trash2 } from 'lucide-react';
// import { Card, CardContent, CardHeader } from './ui/card';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { VariantCard } from './home/variant-card';
import { useModal } from '@/hooks/use-modal-store';
// import { Label } from './ui/label';
import { StateCard } from './home/state-card';

export const Table: React.FC = () => {
  const {
    states,
    variants,
    designs,
    addState,
    addVariant,
    deleteState,
    deleteVariant,
    reorderStates,
  } = useTableStore();
  

  
  const handleAddState = () => {
    const stateName = `State ${states.length + 1}`;
    addState(stateName, []);
  };

  // const { onOpen } = useModal();
  

  const handleAddVariant = () => {
    const variantName = `Variant ${variants.length + 1}`;
    addVariant(variantName);
  };

  const handleDeleteState = (stateId: string) => {
    deleteState(stateId);
  };

  const handleDeleteVariant = (variantName: string) => {
    deleteVariant(variantName);
  };

  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [hoveredVariant, setHoveredVariant] = useState<string | null>(null);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    reorderStates(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-auto">
        <div className="flex mb-4">
          <div className="flex-none w-[30vw] font-semibold text-center text-muted-foreground ml-8">Product Filter</div>
          <div className="flex-grow overflow-x-auto">
            <div className="flex min-w-max">
              {variants.map((variant, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[16vw] text-center relative flex items-center justify-center"
                  onMouseEnter={() => setHoveredVariant(variant)}
                  onMouseLeave={() => setHoveredVariant(null)}
                >
                  <h2 className="font-semibold text-muted-foreground">{variant}</h2>
                  {hoveredVariant === variant && (
                    <Button
                      variant="outline"
                      className="text-destructive absolute z-[9999] -top-6 right-0"
                      onClick={() => handleDeleteVariant(variant)}
                    >
                      <Trash size={16} />
                    </Button>
                  )}
                </div>
              ))}
              <div className="flex-shrink-0 w-16"></div>
            </div>
          </div>
        </div>

        <Droppable droppableId="states">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {states.map((state, index) => (
                <Draggable key={state.id} draggableId={state.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="flex mb-4"
                    >
                      <div className="flex-none w-[30vw] flex items-center">
                        <div className="w-16 flex-shrink-0">
                          <div
                            {...provided.dragHandleProps}
                            className='text-center flex gap-2 items-center cursor-grab hover:opacity-75 transition duration-300 relative'
                            onMouseEnter={() => setHoveredState(state.id)}
                            onMouseLeave={() => setHoveredState(null)}
                          >
                            <h1 className='text-2xl font-bold'>{index + 1}</h1>
                            <Grip />
                            {hoveredState === state.id && (
                              <Button
                                variant="outline"
                                className="text-red-600 absolute -top-10 bg-transparent right-2 hover:opacity-80 border-none"
                                onClick={() => handleDeleteState(state.id)}
                              >
                                <Trash2 size={30} className='text-red-600'/>
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className='bg-muted-foreground/20 h-full w-[2px]'></div>
                        <StateCard/>
                      </div>
                      <div className="flex-grow overflow-x-auto">
                        <div className="flex min-w-max ml-8">
                          {variants.map((variant, vIndex) => (
                            <div key={vIndex} className="flex-shrink-0 w-[16vw] px-2 flex items-center justify-center border-l-2 border-muted-foreground/20">
                              <div className="flex-shrink-0 w-[12vw]  px-2">
                                <VariantCard designs={designs} state={state} variant={variant}/>
                            </div>
                            </div>
                          ))}
                          <div className="flex-shrink-0 w-16 flex items-center justify-center">
                            <Button
                              variant="outline"
                              onClick={handleAddVariant}
                              
                            >
                              <Plus size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className="mt-4">
          <Button variant="outline" onClick={handleAddState}>
            <Plus size={16} />
          </Button>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Table;