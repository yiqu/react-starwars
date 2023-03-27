import React from 'react';
import { Popper, PopperPlacementType } from '@mui/material';


export interface PopoverProps {
  id: string;
  position?: PopperPlacementType;
  handlePopoverOpen?: (target: any) => void;
}

export default function usePopover({ id, position="bottom" }: PopoverProps) {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [content, setContent] = React.useState<any>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (target: any, content: any) => {
    setAnchorEl(anchorEl ? null : target);
    setContent(content);
  };

  const popover = (
    <Popper 
      id={ id }
      open={ !!anchorEl }
      anchorEl={ anchorEl }
      placement={ position }
    >
      { content }
    </Popper>
  );

  return {
    popover,
    handlePopoverClose,
    handlePopoverOpen
  };
};