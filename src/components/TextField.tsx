import React from 'react';
import { useController, Control, FieldValues } from 'react-hook-form';
import clsx from 'clsx';

interface TextFieldProps {
  asterik?: boolean;
  type?: string;
  control: Control<FieldValues>;
  name: string;
  rules?: object;
  className?: string;
  children?: React.ReactNode;
}

export default function TextField({
  asterik,
  type = 'text',
  control,
  name,
  rules,
  className,
  children,
  ...props
}: TextFieldProps) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { isTouched },
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  });

  const validateField = clsx({
    'ring-1 ring-red-500 border-none focus:!ring-1 focus:!ring-red-500':
      isTouched && !!errors[name]?.message,
    'ring-1 ring-red-600 border-none focus:!ring-1 focus:!ring-red-500': !!errors[name]?.message,
  });

  const baseClass = clsx('input-control', className);

  return (
    <>
      <input
        type={type}
        name={name}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(baseClass, validateField)}
        {...props}
      />
      {errors[name] && (
        <span className="mt-1 text-sm text-red-700">
          {/* {errors[name] && errors[name].message} */}
        </span>
      )}
    </>
  );
}

TextField.defaultProps = {
  text: 'text',
};
