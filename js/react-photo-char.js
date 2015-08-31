var TweetBox = React.createClass({
  getInitialState: function() {
    return {    // turns into an object
       text: "", 
       photoAdded: false
    }; 
  },
  handleChange: function(event) { // event handler 
    this.setState({ text: event.target.value }); 
  }, 
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded }); 
  }, 
  remainingCharacters: function() { 
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length; 
    } else {
      return 140 - this.state.text.length; 
    }
  }, 
  render: function() {
    return ( 
      <div className="well clearfix"> 
      <textarea className= "btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button> 
      <button className="btn btn-default pull-right" onClick={this.togglePhoto}> 
      {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
      </button> 
      </div>

      );
  }
}); 
 React.render(
  <TweetBox />, 
  document.body
);
})