import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div className="contact-form">
        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <label className="fname-label"></label>
          <input
            className="fname-input"
            id="fname"
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />

          <label className="email-label"></label>
          <input
            className="email-input"
            id="email"
            type="email"
            placeholder="Your email address"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
          />

          <label className="message-label"></label>
          <textarea
            className="message-textarea"
            id="message"
            placeholder="Leave Me A Message "
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
          ></textarea>

          <button className="btn btn-primary btn-form">send</button>
        </form>
      </div>
    );
  }
}

export default Form;
