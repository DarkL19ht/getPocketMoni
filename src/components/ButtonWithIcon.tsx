import React, { ReactNode } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  hoverEffect?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  type?: 'button' | 'submit';
}

const ButtonWithIcon: React.FC<ButtonProps> = ({
  onClick,
  isLoading,
  loadingText,
  hoverEffect = 'hover:bg-blue-500',
  icon,
  className = '',
  type,
  ...rest
}) => {
  const classNames = clsx(
    'h-12 rounded-lg text-sm flex gap-3 items-center justify-center',
    hoverEffect,
    className
  );

  return (
    <button type={type} className={classNames} onClick={onClick} {...rest}>
      {isLoading ? (
        <>
          {/* <LoadingSpinner className="!text-blue-brand" /> */}
          <div className="flex items-center">
            <span className="">{loadingText}</span>
            <HiOutlineDotsHorizontal fontSize={25} className="animate-pulse" />
          </div>
        </>
      ) : (
        <>
          {rest.children}
          {icon && <span className="text-gold">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default ButtonWithIcon;
