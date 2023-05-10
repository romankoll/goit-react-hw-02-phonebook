// import { nanoid } from 'nanoid';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // [event.target.name]: event.target.value,
    });
  };

  // addNewItem = newItem => {
  //   this.setState(prewState => ({
  //     // const { contacts } = this.state;
  //     this.state.contacts:[...prewState.contacts, newItem];
  //   });)
  // };
  // handleInputChange = event => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleInputChangeNum = event => {
  //   this.setState({
  //     number: event.target.value,
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();

    // this.setState(()=>{
    //   this.state.contacts:[...this.state.contacts,]

    // })
    console.log(this.state);
  };
  render() {
    // const phoneBookItem = {
    //   name: '',
    //   number: '',
    //   id: nanoid(),
    // };
    const {
      contacts,
      name,
      number,
      //   id
    } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleFormSubmit}>
          Name
          <label>
            <input
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Add contact" />
          {/* <button type="button" onClick={this.handleFormSubmit}> ,однаково працює з інпутов вище */}
          {/* Add contact
          </button> */}
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
