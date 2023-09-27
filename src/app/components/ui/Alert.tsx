import React, { useCallback, FC } from 'react';

interface AlertProps {
  message?: string;
  type?: 'success' | 'warning' | 'error';
}

const Alert: FC<AlertProps> = ({ message = '', type }) => {
  const alertType = useCallback(() => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-200',
          borderColor: 'border-green-500',
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-200',
          borderColor: 'border-yellow-500',
        };
      case 'error':
        return {
          bgColor: 'bg-red-200',
          borderColor: 'border-red-500',
        };
      default:
        return {
          bgColor: '',
          borderColor: '',
        };
    }
  }, [type]);

  const css = alertType();

  return (
    <div
      className={`${css.bgColor} border-l-4 ${css.borderColor} text-grey2 p-4 mb-5`}
      role="alert"
    >
      <p className="text-center">{message}</p>
    </div>
  );
};

export default Alert;
