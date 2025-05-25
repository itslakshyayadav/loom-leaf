import { forwardRef } from 'react';

export interface BaseInputProps {
    value: string;
    name?: string;
    id?: string;
    placeholder?: string;
    type?: string;
    onChange: any;
    disabled?: boolean;
    autoFocus?: boolean;
    className?: string;
    label?: string;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps & { label?: string }>(({
    value,
    name,
    id,
    placeholder,
    type = 'text',
    onChange,
    disabled,
    autoFocus,
    className = '',
    label,
    ...rest
}, ref) => (
    <div>
        {label && (
            <label htmlFor={id || name} className="block mb-1 text-sm font-medium text-white">
                {label}
            </label>
        )}
        <input
            ref={ref}
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            className={`w-full px-3 py-2 rounded focus:outline-none bg-black text-white ${className}`}
            {...rest}
        />
    </div>
));

BaseInput.displayName = 'BaseInput';

export default BaseInput;