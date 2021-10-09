import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        let { title, description, imgurl, url, date, author } = this.props
        return (
            <>
                <div>
                    <div className="card" style={{width:'18rem'}}>
                        <img src={!imgurl ? "https:static.toiimg.com/photo/imgsize-36436,msid-86155382/86155382.jpg" : imgurl} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author? "Unmknow":author} at {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={url} target='_blank'className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
