interface IInput {
  name: string
  placeholder: string
  label: string
  type: string
  handlechange: (e: any) => any
}

const Input = ({
  name,
  placeholder,
  label,
  type = 'text',
  handlechange,
}: IInput) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handlechange}
      />
    </div>
  )
}

export { Input }
