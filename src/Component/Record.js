import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Result from './Result'
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
                    <div className="col-md-8 col-md-offset-2" style={{paddingTop:"30px",height:"700px"}}>
                        <Result/>
                    </div>
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        {this.state.isHidden&&
                        <Button variant="fab" style={{backgroundColor:"#41C300",alignItems:"flexend"}} onClick={this.startRecord}>
                            <span><i className="fa fa-microphone" style={{color:"White"}}></i></span>
                        </Button>}
                        {!this.state.isHidden&&
                        <Button variant="fab" style={{backgroundColor:"#EF0078",alignItems:"flexend"}} onClick={this.stopRecord} >
                            <span><i className="fa fa-stop" style={{color:"White"}}></i></span>
                        </Button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Record;

