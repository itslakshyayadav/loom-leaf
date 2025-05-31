import React from "react";

interface BaseErrorProps {
    name: string;
    errors?: Record<string, any>;
}
const BaseErrors: React.FC<BaseErrorProps> = (props) => {
    const { name, errors } = props;

    return (
        errors && errors[`${name}`] && <p role="alert" className="text - red - 700">{errors[`${name}`].message}</p>
    )

}
export default BaseErrors;