import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";



export function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect(()=>{
    const isMovieDetailPage = matchPath("/movie/:id", pathname);

    if(isMovieDetailPage)
      window.scrollTo(0,0);
  }, [pathname]);
  return null;
}