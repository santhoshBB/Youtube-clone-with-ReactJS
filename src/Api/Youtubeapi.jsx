import axios from "axios";

const youtubeKEY = "AIzaSyBz2L2Vf_GDsEZIud5zRiiykXgsA47wfUE";

export const baseParams = {
  part: "snippet",
  maxResults: 14,
  key: youtubeKEY,
};

export let Youtubeapi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default Youtubeapi;
