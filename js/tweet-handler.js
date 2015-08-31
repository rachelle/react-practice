tweet-handler.jsvar TweetBox = React.createClass({
  getInitialState: function() { // initialize the state object
    return {
      text: "" // key in the object
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value }); // modify the event handler to set the state
  },  // built in method and pass the updated key-valued pair
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/> // disabling the button and set it with the return value
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    );
  }
});

React.render(
  <TweetBox />,
  document.body
);
