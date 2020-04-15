import React, { Component } from 'react'
import { History } from 'history'
import './Index.scss'

interface Props {
  history: History
}
interface State {

}

export default class Index extends Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {}
  }

  handleClickGo = (index: number) => {
    console.info(this.props.history)
    this.props.history.push('/list')
  }

  handleClickGo2 = (index: number) => {
    console.info(this.props.history)
    // this.history.replace('/list')
    this.props.history.replace('/list')
  }

  render() {
    return (
      <div className="app">
        <h1 className="h1">ssssss</h1>
        <div className="div">
          <input type="text" placeholder={process.env.REACT_APP_PLACEHOLDER}/>
        </div>
      </div>
    )
  }
}

