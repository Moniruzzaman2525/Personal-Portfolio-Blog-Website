import { Controller } from "react-hook-form";

type TPHSelectForm = {
    label: string;
    name: string;
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    disabled?: boolean;
    mode?: "multiple" | undefined;
};

export const PPSelect = ({ label, name, options, disabled, mode }: TPHSelectForm) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div className="mb-4">
                    {label && <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>}
                    <select
                        {...field}
                        id={name}
                        multiple={mode === "multiple"}
                        disabled={disabled}
                        className={`w-full border p-2 rounded-md ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value} disabled={option.disabled}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {error && <small className="text-red-500">{error.message}</small>}
                </div>
            )}
        />
    );
};

export default PPSelect;
