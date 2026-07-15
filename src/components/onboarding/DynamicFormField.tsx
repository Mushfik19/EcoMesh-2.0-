import type { FieldError, UseFormRegister } from "react-hook-form";
import type { RoleRegistrationField } from "@/data/roleRegistrationConfig";

interface DynamicFormFieldProps {
  field: RoleRegistrationField;
  register: UseFormRegister<Record<string, string>>;
  error?: FieldError;
}

export function DynamicFormField({ field, register, error }: DynamicFormFieldProps) {
  const inputClassName = [
    "min-h-11 w-full rounded-lg border bg-white/[0.04] px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
    error ? "border-red-400/60" : "border-white/10",
  ].join(" ");

  return (
    <label className={field.type === "textarea" ? "block sm:col-span-2" : "block"}>
      <span className="mb-2 block text-sm font-semibold text-foreground">
        {field.label}
        {field.optional ? <span className="ml-1 text-muted-foreground">(Optional)</span> : null}
      </span>
      {field.type === "select" ? (
        <select className={inputClassName} {...register(field.name)}>
          <option value="">Select {field.label}</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea className={`${inputClassName} min-h-28 py-3`} placeholder={field.placeholder} {...register(field.name)} />
      ) : (
        <input className={inputClassName} type={field.type} placeholder={field.placeholder} {...register(field.name)} />
      )}
      {error ? <p className="mt-2 text-xs text-red-200">{error.message}</p> : null}
    </label>
  );
}
