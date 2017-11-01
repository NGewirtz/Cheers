import React from 'react';
import { _dynamicTitle } from '../../util/format_util';

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleImageUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, image: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", image: null });
    }
  }

  handleChange(e) {
    this.setState({ currentUser: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const file = this.state.image;
    const formData = new FormData();
    if (file) {
      formData.append("user[image]", file);
      formData.append(`user[username]`, this.state.currentUser);
      formData.append(`user[id]`, this.state.id);
      this.props.updateUser(formData)
        .then(() => this.props.history.push(`/users/${this.state.id}`));
    }else {
      formData.append(`user[username]`, this.state.currentUser);
      formData.append(`user[id]`, this.state.id);
      this.props.updateUser(formData)
        .then(() => this.props.history.push(`/users/${this.state.id}`));
    }
  }

  render() {
    let errors;
    if (Array.isArray(this.props.errors)) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    }else {
      console.log(errors);
      errors = [];
    }
    _dynamicTitle("Edit Profile");
    return (
      <form onSubmit={this.handleSubmit} className="user-edit-form">
        <img src={this.state.imageUrl || this.props.user.userImg}/>
        <label htmlFor="file" className="add-image">Add An Image
          <input id="file" type="file" onChange={this.handleImageUpload} className="add-image"></input>
        </label>
        <input onChange={this.handleChange} type="text" value={this.state.currentUser} placeholder="Username"/>
        <input type="submit" value="Update Profile" />
        <ul className='beer-form-errors'>
          {errors}
        </ul>
      </form>
    );
  }
}


export default ProfileForm;
