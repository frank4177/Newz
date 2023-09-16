
import useSWR from "swr";
import { request } from "./config";

//GET LANGUAGES
export const useFetchAllNews = () => {


  // HEADERS

  //NEW WAY TO FETCH DATA
  const fetcher = async (args: string) => {
    const res = await request.get(args);
    // console.log("lo:", res)
    return res?.data;
  };

  const { data, isLoading, isValidating } = useSWR(`/everything?q=apple&sortBy=popularity&apiKey=${process.env.API_KEY}`, fetcher);
  return { data , isLoading};
};


//GET LATEST NEWS
export const useFetchLatestNews = () => {


  // HEADERS

  //NEW WAY TO FETCH DATA
  const fetcher = async (args: string) => {
    const res = await request.get(args);
    // console.log("lo:", res)
    return res?.data;
  };

  const { data, isLoading, isValidating } = useSWR(`/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`, fetcher);
  return { data , isLoading};
};