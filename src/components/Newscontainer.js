import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Sppiner from './Sppiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class Newscontainer extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 5
    }

    static PropsTypes = {
        country: PropTypes.string,
        //pagesize = this.prototype
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `TopNews - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updatenews() {
        this.props.setprogress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setprogress(30)
        let parseddata = await data.json();
        this.props.setprogress(70)
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        })
        this.props.setprogress(100)

    }
    async componentDidMount() {
        this.updatenews();
    }

    // handlepreviousclick = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     })
    //     this.updatenews();
    // }
    // handlenextclick = async () => {
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/(this.props.pagesize))))
    //     // {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     this.updatenews();
    //     // }

    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
        })
    }
    render() {
        return (
            <><h3 className="text-center" style={{marginTop:"70px"}}>News - Top {this.capitalizeFirstLetter(this.props.category)} Headings </h3>
                {this.state.loading && <Sppiner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Sppiner />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <Newsitems title={element.title} description={element.description ? element.description.slice(0, 75) : " "} imgurl={element.urlToImage} url={element.url} author={element.author}
                                        date={element.publishedAt} />
                                </div>;
                            })}
                        </div>
                    </div >
                </InfiniteScroll>  
            </>
        )
    }
}