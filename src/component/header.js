import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="" style={{backgroundColor:'grey'}}>
                    <div className="row">
                        <div className="px-3">
                        <button type="button1" className="btn btn-secondary px-2" >Home</button>
                        <button type="button2" className="btn btn-secondary px-2" style={{marginLeft:10}}>List Product</button>
                        </div>
                        <div className="" style={{marginLeft:580}}>
                        <button type="button" className="btn btn-secondary px-2">Find</button>
                        <input type="text" placeholder="you want find anything" style={{marginLeft:10 }}/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
