import { Component } from 'react';
import { Form, Label, Input, Button } from './Form.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;

    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов.
                Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы,
                тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>

        <div>
          <Button type="submit">Add contact</Button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
