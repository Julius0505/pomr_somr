import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const insuranceOptions = [
  'N/a',
  'SP',
  'MCR',
  'MCD',
  '3PART',
  'MCRADVG'
];

function InsuranceMenu(props) {
  const {title} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Typography variant="subtitle1" style={{width: "max-content"}} className="cursor-pointer" onMouseOver={handleMenuClick}><b>{title}:</b> {insuranceOptions[selectedIndex]}</Typography>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {insuranceOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

    </>
  )
}

export default InsuranceMenu;
