var TweetBox = React.createClass({
  handleChange: function(event) {
    console.log(event.target.value);
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}>
        </textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled>Tweet</button>
      </div>
    );
  }
});

React.render(
  <TweetBox />,
  document.body
);
