import {useField} from "formik"
import {Form} from "react-bootstrap"

type Props = {
  name: string
  options: Array<string>
  label?: string
  size?: "lg" | "sm"
}

function MySelect({options, label, ...props}: Props) {
  const [field] = useField(props)

  function generateOptions() {
    return options.map((option, idx) => <option key={idx}>{option}</option>)
  }

  return (
    <Form.Group controlId={field.name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...field} {...props} as="select">
        {generateOptions()}
      </Form.Control>
    </Form.Group>
  )
}

export default MySelect
