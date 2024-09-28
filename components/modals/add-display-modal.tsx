'use client';

import { useModal } from '@/hooks/use-modal-store';
import { useCallback } from 'react';
import { Modal } from './modal';
import useTableStore from '@/hooks/use-table-store';
import Image from 'next/image';
// import { Input } from '../ui/input';
import { ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const AddDisplayModal = () => {
  const { isOpen, onClose, type, stateId, variantId } = useModal();
  const { insertDesign } = useTableStore();

  const isModalOpen = isOpen && type === 'addDisplayModal';

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmit = (designSrc: string) => {
    console.log("Submitting design:", designSrc);

    if (!designSrc) {
      console.log("No design selected");
      return;
    }

    const design = { id: stateId!, content: designSrc };
    insertDesign(stateId!, variantId!, design);
    handleClose();
  };

  const images = [
    { src: '/assets/img1.jpg', alt: 'Design 1' },
    { src: '/assets/img2.jpg', alt: 'Design 2' },
    { src: '/assets/img3.jpg', alt: 'Design 3' },
    { src: '/assets/img4.jpg', alt: 'Design 4' },
    { src: '/assets/img1.jpg', alt: 'Design 5' },
    { src: '/assets/img2.jpg', alt: 'Design 6' },
    { src: '/assets/img3.jpg', alt: 'Design 7' },
    { src: '/assets/img4.jpg', alt: 'Design 8' },
    { src: '/assets/img4.jpg', alt: 'Design 4' },
    { src: '/assets/img1.jpg', alt: 'Design 5' },
    { src: '/assets/img2.jpg', alt: 'Design 6' },
    { src: '/assets/img3.jpg', alt: 'Design 7' },
  ];

  return (
    <Modal 
      isOpen={isModalOpen} 
      body={(
        <div className='flex flex-col items-start gap-10 w-full'>
          <div className='flex items-end w-full justify-between'>
            <div className='flex flex-col items-start gap-16'>
              <div className='relative'>
                <ImageIcon className='w-10 h-10 text-primary' />
                <div className='absolute inset-0 flex items-center justify-center opacity-70'>
                  <div className='flex items-center justify-center border-primary border-2 aspect-square h-[20vh] rounded-full'>
                    <div className='flex items-center justify-center border-primary border-2 aspect-square h-[14vh] rounded-full'>
                      <div className='flex items-center justify-center border-primary border-2 aspect-square h-[8vh] rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className='font-semibold text-xl z-[99]'>Select a Design to Link</h1>
            </div>
            <input placeholder='Search Designs' className='w-[40%]' />
          </div>
          <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[40vh] overflow-hidden overflow-y-scroll'>
            {images.map((image, index) => (
              <div key={index} className='relative w-full h-32'>
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  layout='fill' 
                  objectFit='cover' 
                  className='rounded-md cursor-pointer'
                />
                <div className='group absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-0 hover:bg-opacity-45 transition duration-200 cursor-pointer rounded'>
                  <Button 
                    variant={'outline'} 
                    className='hidden group-hover:block transition duration-200'
                    onClick={() => handleSubmit(image.src)}
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} 
      onClose={handleClose} 
    />
  );
};
