import Form from "react-bootstrap/Form";




const Inputs = (props) => {
    const cambioDeInput = (e) => {
        props.setIsPasswordValid(e.target.value === props.password)
      }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={cambioDeInput} />
      </Form.Group>
    </Form>
  );
};

export default Inputs;
