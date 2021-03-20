import {useField} from "formik"
import {Form} from "react-bootstrap"

function MyRadio(props) {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""

  return (
    <Form.Check
      type="radio"
      isInvalid={errorText}
      id={"radio-label-" + field.value + Math.random()}
      {...field}
      {...props}
    />
  )
}

export default MyRadio
