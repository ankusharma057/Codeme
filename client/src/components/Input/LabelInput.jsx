import React from "react";
import { Form } from "react-bootstrap";

const LabelInput = ({
  label,
  type,
  placeholder,
  controlId,
  name,
  onChange,
  required,
  labelClassName,
  groupClassName,
  ...rest
}) => {
  return (
    <Form.Group className={`mb-3 ${groupClassName}`} controlId={controlId}>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onWheel={(e) => (type = "number" && e.target.blur())}
        {...rest}
      />
    </Form.Group>
  );
};

export default LabelInput;
