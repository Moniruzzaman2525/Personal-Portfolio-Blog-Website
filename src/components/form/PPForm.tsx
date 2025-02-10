/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
};

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
    style?: React.CSSProperties;
} & TFormConfig;

const PPForm = ({ onSubmit, children, defaultValues, resolver, style }: TFormProps) => {
    const formConfig: TFormConfig = {};

    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
    }

    if (resolver) {
        formConfig["resolver"] = resolver;
    }

    const methods = useForm(formConfig);

    const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form style={style} className="space-y-4" onSubmit={methods.handleSubmit(onSubmitHandler)}>
                {children}
                <button type="submit" className="inline-block px-6 py-3 bg-[#1e16df] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#3830cf] transition duration-300">
                    Submit
                </button>
            </form>
        </FormProvider>
    );
};

export default PPForm;
