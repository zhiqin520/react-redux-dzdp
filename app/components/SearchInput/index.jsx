import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: this.props.value || ''
        }
    }
    render() {
        return (
            <input
                className="search-input" 
                type="text" 
                placeholder="请输入关键字" 
                onChange={this.ChangeHandle}
                onKeyUp={this.KeyUpHandle}
                value={this.state.value}/>
        )
    }
    componentDidMount() {

    }
    ChangeHandle = (e) => {
        // 监控变化
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle = (e) => {
        // 监控 enter 事件
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput