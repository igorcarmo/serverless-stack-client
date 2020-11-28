import React from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsArrowRepeat } from 'react-icons/bs';

import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ... props
}) {
  return (
    <Button
      disabled={disabled || isLoading}
      className={`LoaderButton ${className}`}
      { ...props }
    >
      { isLoading && <BsArrowRepeat className="spinning"/> }
      { props.children }
    </Button>
  )
}