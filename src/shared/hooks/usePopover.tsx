import React, { useEffect } from 'react';
import Popover, { PopoverOrigin } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export interface PopoverProps {
  id: string;
  open?: boolean;
  target?: EventTarget & HTMLElement;
  position?: PopoverOrigin;
  handlePopoverOpen?: () => void;
}

export default function usePopover({ id, position={vertical: 'bottom',horizontal: 'left'} }: PopoverProps) {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event);
  };

  const popover = (
    <Popover
      id={ id }
      open={ !!anchorEl }
      anchorEl={ anchorEl }
      anchorOrigin={ position }
      onClose={ handlePopoverClose }
      disableRestoreFocus
    >
      <Typography sx={ { p: 1 } }>I use Popover.</Typography>
    </Popover>
  );

  return {
    popover,
    handlePopoverClose,
    handlePopoverOpen
  };
};