import React from "react";
import "../../styles/select-box.scss";

class SelectBox extends React.Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    showItems: false,
    selectedItem: {
      value: "Select a country..."
    }
  };

  dropdown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
      selectedItem: this.props.items && this.props.items[0]
    }));
  };

  selectItem = item =>
    this.setState({
      selectedItem: item,
      showItems: false
    });

  render() {
    return (
      <React.Fragment>
        <div>
          <div
            className="select-box--box"
            style={{ width: this.state.width || "180px" }}
          >
            <div className="select-box--container">
              <div className="select-box--selected-item">
                {this.state.selectedItem.value}
              </div>
              <div className="select-box--arrow" onClick={this.dropdown}>
                <span
                  className={`${
                    this.state.showItems
                      ? "select-box--arrow-up"
                      : "select-box--arrow-down"
                  }`}
                />
              </div>
              <div
                style={{ display: this.state.showItems ? "block" : "none" }}
                className="select-box--items"
              >
                {this.state.items.map(item => (
                  <div
                    key={item.id}
                    onClick={() => this.selectItem(item)}
                    className={
                      this.state.selectedItem === item ? "selected" : ""
                    }
                  >
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectBox;
