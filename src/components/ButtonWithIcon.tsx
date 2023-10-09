import React, { ReactNode } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import clsx from 'clsx';
import Image from 'next/image';

interface ButtonProps {
  onClick?: () => void;
  hoverEffect?: string;
  icon?: boolean;
  icon2?: boolean;
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
  icon2,
  className = '',
  type,
  ...rest
}) => {
  const classNames = clsx(
    'h-12 rounded-lg text-[14px] flex gap-3 items-center justify-center',
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
          {icon ? (
            <Image src="/profileicon.svg" alt="Group Agent Picture" width={20} height={20} />
          ) : icon2 ? (
            <Image src="/images/1icone.png" alt="click" width={16} height={16} />
          ) : (
            <span className="text-gold">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default ButtonWithIcon;
