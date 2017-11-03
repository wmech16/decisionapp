class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      title: 'Visibility Toggle',
      visibility: false

    }

  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Text' : 'Show Text'}
        </button>
        <div>
          {this.state.visibility && (
            <p>Here I am!</p>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));