import React from "react"

class ButtonComponent extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.props.fetchUsers();
  }

  render() {
    let users = this.props.users.map(user => {
      return <div>{user.name}</div>
    })
    return (
      <div>
     
        is fetching: {this.props.isFetching ? "fetching..." : "no fetch"}
        <button onClick={this.handleClick }>{this.props.default}</button>
        <br />

        {users}

      </div>
    )
  }
}


export default ButtonComponent;
