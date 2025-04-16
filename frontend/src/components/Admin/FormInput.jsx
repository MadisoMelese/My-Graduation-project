// src/components/FormInput.js

const FormInput = ({ label, name, value, onChange, type, ...rest }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="w-full p-2 border rounded"
        required
        {...rest}

      />
    </div>
  );
};

export default FormInput;
