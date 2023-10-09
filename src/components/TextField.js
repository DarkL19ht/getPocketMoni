import React from 'react';
import { useController } from 'react-hook-form';
import clsx from 'clsx';

// interface TextFieldProps {
//   asterik?: boolean;
//   type?: string;
//   control: Control<FieldValues>;
//   name: string;
//   rules?: object;
//   className?: string;
//   children?: ReactNode;
// }

export default function TextField({
  type = 'text',
  control,
  name,
  rules,
  className,
  ...props
}) {
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

  const baseClass = clsx(
    'input-control border-none rounded bg-gray mb-5 px-3 py-3 w-full',
    className
  );

  return (
    <>
      <div className="flex flex-col md:w-[400px]">
        <input
          placeholder="Enter your email to get notified when we launch"
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
          <span className="text-sm text-red-500">{errors[name] && errors[name].message}</span>
        )}
      </div>
    </>
  );
}

TextField.defaultProps = {
  text: 'text',
};
