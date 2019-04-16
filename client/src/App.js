// import React, { Component } from 'react';
// import Header from './Header';
// import Login from './Login';
// import './_reset.scss';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <Login />
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
  }
  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        {this.state.members.map(member =>
          <div key={member.id}>{member.name} {member.surname} - {member.email}</div>
        )}
      </div>
    );
  }
};

export default App;