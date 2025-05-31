import React, { Fragment } from "react";
import BaseErrors from "./BaseErrors";

interface BaseCheckboxProps {
    name: string;
    register: any; // You can replace 'any' with the correct type from react-hook-form if available
    errors?: Record<string, any>;
    labelName: string;
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({ name, register, errors, labelName }) => {
    return (
        <Fragment>
            <div className="flex items-center gap-2">
                <input
                    id={name}
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                    checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer "
                    {...register(name)}
                />
                <label htmlFor={name} className="text-md text-gray-400 dark:text-gray-300">
                    {labelName}
                </label>
            </div>
            <BaseErrors name={name} errors={errors} />
        </Fragment>
    );
};

export default BaseCheckbox;