import React from 'react';

class Results extends React.Component {

  // instead of looping and doing lists ... you should be using JSON Pretty Component to just dump the JSON
  render() {
    return (
      <>
      <h2>Results</h2>
      <ul>
        {
          this.props.list.map( (item,idx) =>
            <li className="Pokemon-list" pokemon-info={`item-${idx}`} key={idx}>{item.name}</li>
          )
        }
      </ul>
      </>
    )
  }

}

export default Results;


