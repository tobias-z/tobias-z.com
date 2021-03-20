import {useField} from "formik"
import {Form, FormControl} from "react-bootstrap"

type InputProps = {
  name: string
  label?: string
  text?: string
  placeholder?: string
  type?: "email" | "password" | "text" | "number" | "search"
  autoFocus?: boolean
}

function MyInput({label, text, ...props}: InputProps) {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""

  return (
    <Form.Group controlId={field.name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...field} {...props} isInvalid={!!errorText} />
      {errorText && (
        <FormControl.Feedback type="invalid">{errorText}</FormControl.Feedback>
      )}
      {text && <Form.Text className="text-muted">{text}</Form.Text>}
    </Form.Group>
  )
}

export default MyInput
