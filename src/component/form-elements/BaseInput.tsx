
interface BaseInputProps {
    type: string;
    name: string;
    labelName: string;
    register: (name: string, rules: any) => any;
    errors?: any;
    validationRules?: Record<string, any>;
    children?: React.ReactNode;
}

const BaseInput: React.FC<BaseInputProps> = ({
    type,
    name,
    children,
    labelName,
    register,
    errors,
    validationRules = {},
    ...restInputProps
}) => {

    const setErrorMessage = (rulesKey: string, validationValue: any) => {
        const messageList: Record<string, string> = {
            required: `${labelName} is required`,
            minLength: `${labelName} needs to be at least ${validationValue} characters`,
            maxLength: `${labelName} needs to be at most ${validationValue} characters`,
            max: `${labelName} needs to be at most ${validationValue}`,
            min: `${labelName} needs to be at least ${validationValue}`,
            pattern: `${labelName} must match the pattern ${validationValue}`,
            disabled: `${labelName} is disabled`,
        };

        return messageList[rulesKey];
    };

    const validFormRule = (validationRules: Record<string, any>) => {
        const finalRules: Record<string, any> = {};
        for (const rulesKey in validationRules) {
            finalRules[rulesKey] = {
                value: validationRules[rulesKey],
                message: setErrorMessage(rulesKey, validationRules[rulesKey])
            };
        }

        if (type === 'number') {
            finalRules['valueAsNumber'] = true;
        }
        return finalRules;
    };

    return (
        <div className="form-floating">
            <input
                {...restInputProps}
                type={type}
                className={`form-floating form-control
                    block
                    w-full
                    px-4
                    py-2
                    text-base
                    font-normal
                    text-green-700
                    bg-white bg-clip-padding
                    border border-solid border-green-400
                    rounded
                    transition
                    ease-in-out
                    focus:text-green-700
                    focus:bg-white
                    focus:border-green-600 
                    focus:outline-none`}
                id={name}
                {...register(name, validFormRule(validationRules))}
            />
            {children}
            {errors && errors[name] && (
                <p role="alert" className="text-red-700">
                    {errors[name].message}
                </p>
            )}
            <label htmlFor={name} className="text-gray-400">
                {labelName}
                {validationRules?.required && '*'}
            </label>
        </div>
    );
};

export default BaseInput;
