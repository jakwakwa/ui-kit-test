import React, { Component } from "react";
import "./styles/styles.scss";
import SelectBox from "./features/select-box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Custom Select Box using ReactJs</h1>
        <div>
          <SelectBox
            width={500}
            items={[
              { value: "United States", id: 1 },
              { value: "Columbia", id: 2 },
              { value: "China", id: 3 },
              { value: "Finland", id: 4 }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
