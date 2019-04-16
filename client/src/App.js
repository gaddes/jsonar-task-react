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
    fetch('/data')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
  }
  render() {
    return (
      <div className="Data">
        <h1>Data</h1>
        {this.state.members.map(member =>
          <div key={member.customerNumber}>{member.customerName}</div>
        )}
      </div>
    );
  }
};

export default App;