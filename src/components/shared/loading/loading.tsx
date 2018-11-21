import * as React from 'react';
import { ScaleLoader } from 'react-spinners';

type MyState = {
    loading: boolean
}
export class Loading extends React.Component<{loading:boolean},MyState>{
    constructor(props){
        super(props);
        this.state ={
            loading: this.props.loading
        }
       
    }
    render(){
        return (
            <div>
            <ScaleLoader loading={this.state.loading} color={'#17a2b8'} />
            {/* {this.state.loading} */}
            </div>
        );
    }
}
export default Loading;