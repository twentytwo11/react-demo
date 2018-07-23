import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    _add(){
        this.setState({
            count:this.state.count + 1
        })
    }



    render() {
        return (
            <div>
                这里是首页<br/>
                结果：{this.state.count}<br/>
                <button onClick={() => this._add()}>增加</button>
            </div>
        )
    }
}