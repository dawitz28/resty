// // import logo from './logo.svg';
// import React from 'react';
// import Footer from './footer/footer.js';

// // import './App.css';
// class Header extends React.Component {
//   render() {
//     return (
//       <h1>This is the react version...</h1>
//     );
//   }
// }

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//       words: "Type Something..."
//     };
//   }

//   handleIncrement = () => {
//     // this.state.clicks++;
//     let clicks = this.state.clicks + 1;
//     this.setState({clicks});
//     // this.setState({ ...state, clicks:clicks })
//   }

//   handleChangeInput = (e) => {
//     this.setState(
//       {...this.state, words: e.target.value}
//     )
//     // this could have been:
//     // let words = e.target.value;
//     // this.setState({words})
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <div>
//           {this.state.words}
//           <div>
//             <input type="text" onChange={this.handleChangeInput} />
//           </div>
//         </div>
//         <div>
//           {this.state.clicks}

//           <button onClick={this.handleIncrement}>+</button>
//         </div>
//         <Footer />
//       </>
//     );
//   }

// }

// export default App;


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;





import React from 'react';
import axios from 'axios';
import Results from './Results/Results.js';
import Form from './Form/form.js';

import Header from './Header/Header.js';
import Footer from './footer/footer.js';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [
      {text: "who am I? "},
      ]
    }
  }

  // fetchData = async (options) => {

  //   const response = await axios({
  //     method: options.method || "get",
  //     url: options.url,
  //     data: options.body && JSON.parse(options.body)
  //   });

  //   const results = response.data.results;
  //   this.setState({results});
  // }

  fetchData = async (options) => {

    const response = await axios({
      method: options.method,
      url: options.url,
      
// this is the dada we can attach to the url above 
      // data: JSON.parse(options.body)
      data: options.data 
    });

    const results = response.data.results;
    this.setState({results});

    
    // if(options.method === "get") {
    //   const results = response.data.results;
    //   this.setState({results});
    // }
    // else {
    //   options.method="get";
    //   this.fetchData(options);
    // }

  }
  render() {
    return (
      <>
        <Header />
        <h1> something new </h1>
        <Form handler={this.fetchData} />
        <Results list={this.state.results} /> 

        <div>
        <Footer />
        </div>
    </>
    )
  }
}

export default App;

