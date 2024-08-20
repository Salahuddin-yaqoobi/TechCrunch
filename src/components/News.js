import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader  from "./Loader";

export class News extends Component { 

  constructor() {
    super();
    this.state = {
      articles:  [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    console.log("i am using the cdm");
    let url = `https://newsapi.org/v2/everything?q=technology&from=2024-08-18&to=2024-08-18&sortBy=popularity&apiKey=f73b98a7cd2b4da5abfa54d5df8fbd03&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
  
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState = ({
      // articles : parsedData.articles
    // })
  
     await fetch(url).then((res) => res.json())
                .then((json) => {
                    this.setState({
                        articles: json.articles,
                        totalResult : json.totalResult,
                        loading: false,
                        page :1
                    });
                })
  }

  handleNextBtn =  async ()=>{
    if(this.state.page +1 > (Math.ceil(this.totalResult/this.props.pageSize))){

    }
    else{
    console.log("i am using the cdm");
    let url = `https://newsapi.org/v2/everything?q=technology&language=en&from=2024-08-18&to=2024-08-18&sortBy=popularity&apiKey=f73b98a7cd2b4da5abfa54d5df8fbd03&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
  
        console.log("click Next button");
        await fetch(url).then((res) => res.json())
        .then((json) => {
            this.setState({
                articles: json.articles,
                loading: false,
                page : this.state.page + 1,
                loading : false
            });
        })
      }
  }
  handlePrevBtn = async ()=>{
    console.log("click Next button")
    console.log("i am using the cdm");
    let url = `https://newsapi.org/v2/everything?q=technology&from=2024-08-18&to=2024-08-18&sortBy=popularity&apiKey=f73b98a7cd2b4da5abfa54d5df8fbd03&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
  
        console.log("click Next button");
        await fetch(url).then((res) => res.json())
        .then((json) => {
            this.setState({
                articles: json.articles,
                loading: false,
                page : this.state.page - 1,
                loading : false
            });
        })
 
  }
   render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">TechCrunch - Top Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
         {!this.state.loading && this.state.articles.map((element) =>{
             return <div className="col-md-4" key={element.url}>
             <Newsitem
               title={element.title}
               description={element.description}
               imageUrl={element.urlToImage}
               newsUrl = {element.url}
             />
           </div>          
          })
        }
        </div>
        <div className="conatainer d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" onClick={this.handlePrevBtn} className="btn btn-dark">&larr; Prevoius</button>
        <button disabled = {this.state.page +1 > (Math.ceil(this.totalResult/this.props.pageSize))} type="button" onClick={this.handleNextBtn} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
