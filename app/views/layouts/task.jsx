// Using react on the view instead of using the erb files. 

class Task extends React.Component {
    onClick()
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