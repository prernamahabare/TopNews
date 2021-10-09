import React, { Component } from 'react'
import loading from './loading.gif'

export default class Sppiner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="mb-5"  src={loading} alt="no" />
            </div>
        )
    }
}
