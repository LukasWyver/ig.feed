import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      className={`rounded-lg ${
        hasBorder
          ? 'h-16 w-16 border-4 border-white dark:border-gray-800 outline outline-2 outline-success-500'
          : 'h-12 w-12'
      }`}
    />
  );
}
