import React,{Component} from 'react';
import AudioRecorder from 'react-audio-recorder';
import Button from '@material-ui/core/Button'
class Record extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHidden: true,
        }
        this.startRecord = this.startRecord.bind(this);
        this.stopRecord = this.stopRecord.bind(this);
    }
    startRecord(){
        this.setState({isHidden: false});
    }
    stopRecord(){
        this.setState({isHidden: true});
    }
    render(){
        return(
            <div id="Record">
                <div className="container-fluid">
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        {this.state.isHidden&&
                        <Button variant="raised" style={{backgroundColor:"#41C300"}} onClick={this.startRecord}>
                            <span><i className="fa fa-microphone" style={{color:"White"}}></i></span>
                        </Button>}
                        {!this.state.isHidden&&
                        <Button variant="raised" style={{backgroundColor:"#EF0078"}} onClick={this.stopRecord}>
                            <span><i className="fa fa-stop" style={{color:"White"}}></i></span>
                        </Button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Record;