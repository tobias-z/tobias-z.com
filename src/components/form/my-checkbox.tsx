import {useField} from "formik"
import * as React from "react"
import {Form, FormControl} from "react-bootstrap"
import {FormCheckType} from "react-bootstrap/esm/FormCheck"

type CheckboxProps = {
  type?: FormCheckType
  label?: string
  name: string
}

function MyCheckbox({type = "checkbox", label, ...props}: CheckboxProps) {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""

  return (
    <Form.Group controlId={field.name}>
      <Form.Check
        type={type}
        isInvalid={!!errorText}
        label={label}
        {...field}
        {...props}
      />
      {errorText && (
        <FormControl.Feedback type="invalid">{errorText}</FormControl.Feedback>
      )}
    </Form.Group>
  )
}

export default MyCheckbox
