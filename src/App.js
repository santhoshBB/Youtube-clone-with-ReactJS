import React, { Component, Fragment } from "react";
import HeaderComponent from "./component/Header/HeaderComponent";
import Youtubeapi, { baseParams } from "./Api/Youtubeapi";
import VideoList from "./component/Videos/VideoList";
import VideosDetails from "./component/Videos/VideosDetails";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      selectedvideo: null,
    };
    // this.FormSubmit = this.FormSubmit.bind(this);
  }
  componentDidMount() {
    this.FormSubmit("pubg");
  }
  FormSubmit = async (term) => {
    let res = await Youtubeapi.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    this.setState({
      videos: res.data.items,
      loading: true,
      selectedvideo: res.data.items[0],
    });
    console.log(res.data.items);
  };

  onSelect = (data) => {
    this.setState({ selectedvideo: data });
  };

  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent FromAppProps={this.FormSubmit} />
        </header>
        <main>
          <div className="main">
            <VideosDetails videosdata={this.state.selectedvideo} />
            <VideoList
              videosdata={this.state.videos}
              onSelect={this.onSelect}
            />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
