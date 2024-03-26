import React, { useState, useEffect } from "react";
import Newsitem from "../components/Newsitem";
import Layout from "../components/Layout";

const Headline = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    updateNews();
  }, []);
  //handle the click on previous button - decrease the page count and again calls the api
  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };
  //Handle the click on next - increase the count of page and calls the api
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };
  const updateNews = async () => {
    //let apiKey="c8b36f6e23e6407db06622bb9c2a7561";
    let url = `https://newsapi.org/v2/top-headlines?q=${props.keyword}&category=${props.category}&country=${props.country}&to=${date}&sortBy=popularity&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
  };
  return (
    <Layout>
      <div className="container my-3">
        <h2 className="text-centre" >Top-Headline</h2>

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : "No title available..."}
                  description={
                    element.description ? element.description.slice(0, 88) : "No Description available..."
                  }
                  newsUrl={element.url ? element.url : ""}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg"
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / 18)}
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </Layout>
  );
};
Headline.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
  keyword: "all"
};
export default Headline;
