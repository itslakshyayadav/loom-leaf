import { useForm } from "react-hook-form";
import BaseButton from "../base-button/BaseButton";
import BaseInput from "./BaseInput";
import BaseCheckbox from "./BaseCheckbox";
import BaseSelect from "./BaseSelect";
import BaseRadioInput from "./BaseRadioInput";

const fieldMap = {
    BaseInput,
    BaseCheckbox,
    BaseSelect,
    BaseRadioInput,
}

interface BaseFormProps {
    fields: Array<{
        name: string;
        fieldType: keyof typeof fieldMap;
        labelName?: string;
        options?: Array<{ value: string; label: string }>;
        placeholder?: string;
        required?: boolean;
        defaultValue?: any;
    }>;
    onSubmit: (data: any) => void;
    children?: React.ReactNode;
}

export default function BaseForm({ fields, onSubmit, children }: BaseFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(fields);
    return (
        <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map((field, index) => {

                    const FieldComponent = fieldMap[field.fieldType];
                    const { fieldType, labelName, ...restProps } = field

                    return (
                        <FieldComponent
                            key={`field-${field.name}-${index}`}
                            register={register}
                            errors={errors}
                            labelName={labelName ?? ""}
                            {...restProps} >
                        </FieldComponent>
                    )
                })
            }

            {/* {children} */}
            {children ? children : <span>
                <BaseButton type="submit" variant="secondary" >
                    Submit
                </BaseButton>
            </span>}
        </form >
    )

}