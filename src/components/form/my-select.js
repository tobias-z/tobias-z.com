import { useField } from "formik"
import React from "react"
import { Form } from "react-bootstrap"

function MySelect({ size, options, label, ...props }) {
  const [field] = useField(props)

  function generateOptions() {
    return options.map((option, idx) => <option key={idx}>{option}</option>)
  }

  return (
    <Form.Group controlId={field.name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...field} {...props} as="select" size={size && size}>
        {generateOptions()}
      </Form.Control>
    </Form.Group>
  )
}

export default MySelect
