import { useState } from 'react';
import { Label } from "@radix-ui/react-label";
import { Card, CardContent } from "../ui/card";

interface StateCardLabelProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const StateCardLabel = ({ label, isSelected, onClick }: StateCardLabelProps): React.JSX.Element => {
  return (
    <Label
      onClick={onClick}
      className={`cursor-pointer px-2 text-sm border-[1px] rounded-full transition-colors
        ${isSelected ? 'text-primary bg-primary/10 border-primary' : 'border-muted-foreground/40 text-muted-foreground/40'}`}
    >
      {label}
    </Label>
  );
};

export const StateCard = (): React.JSX.Element => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const labels = ["Type 1", "Type 2", "Type 3"];

  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
  };

  return (
    <Card className='w-[25vw] h-[20vh] border-dashed ml-8 bg-white dark:bg-neutral-800'>
      <CardContent className='h-full w-full flex gap-4 items-center justify-center'>
        <Card className="h-auto w-auto mt-4 bg-white dark:bg-neutral-800">
          <CardContent className='h-full w-full flex gap-4 items-center justify-center pt-6'>
            {labels.map((label) => (
              <StateCardLabel
                key={label}
                label={label}
                isSelected={selectedLabel === label}
                onClick={() => handleLabelClick(label)}
              />
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};