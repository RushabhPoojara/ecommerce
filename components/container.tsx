import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }): React.JSX.Element => {
  return <div className={cn('px-4 py-8 md:px-8 md:py-16', className)}>{children}</div>;
};