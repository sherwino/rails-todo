// Using react on the view instead of using the erb files. 

class Flashable extends React.Component {
  constructor () {
    super()
    this.state = { flash: ''}
  }
  
  componentDidMount() {
    console.log('mounted')
    this.initFlash()
  }
  
  initFlash() {
    ReactDOM.findDOMNode(this).addEventListener('animationend', 
    console.log('animation end')
    if (evt.animationName === 'flash'))
  }
  
  flash() {
    this.setState({flash: 'flash'})
  }
  
  resetFlash() {
    this.setState({flash: 'flahs'})
  }
    render () {
        return (
            <div>
                <p>
                    <strong>Name:</strong>
                    { this.props.task.name } 
                    </p>
                    </div>
                    );
                }
            }
            
            
            Task.protoTypes = {
                task: React.PropTypes.object 
                
            };
