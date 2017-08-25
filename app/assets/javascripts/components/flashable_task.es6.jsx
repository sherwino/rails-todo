class FlashableTask extends React.Component {
  onClick() {
    console.log('click')
    this.flashable.flash()
  }
  
  render () {
    return (
      <div>
        <div onClick={this.onClick.bind(this)}>
        Task: {this.props.task}</div>
      </div>
    );
  }
}

FlashableTask.propTypes = {
  task: React.PropTypes.object
};

