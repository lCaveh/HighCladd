import React from 'react';
import { BASE_CLASS, VARIANT_CLASSES } from './Button.types';
import type { ButtonProps, ButtonAsButton } from './Button.types';

const Button = ({ variant = 'primary', className = '', children, ...rest }: ButtonProps): React.ReactElement => {
  const classes = `${BASE_CLASS} ${VARIANT_CLASSES[variant]} ${className}`;

  if (rest.as === 'a') {
    const { as: _as, ...anchorProps } = rest;
    return <a className={classes} {...anchorProps}>{children}</a>;
  }

  const { as: _as, ...btnProps } = rest as ButtonAsButton;
  return <button className={classes} {...btnProps}>{children}</button>;
};

export { Button };
