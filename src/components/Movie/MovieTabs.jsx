import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Trailers from "../common/Trailers/Trailers";
import Similar from "../common/Similar/Similar";

const MovieTabs = (props) => {
    return (
        <Tabs>

                <TabList>
                    <div className="d-flex">
                        <Tab>
                            <div className="col-2 text-center">
                                <div >
                                    <h5>Трейлеры</h5>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="col-2 text-center">
                                <div>
                                    <h5>Похожее</h5>
                                </div>
                            </div>
                        </Tab>
                    </div>
                </TabList>
                <TabPanel >
                    <Trailers trailers={props.trailers} id={props.movieId}
                              getVideos={props.getVideos} isLoading={props.movieTrailersIsLoading}
                              error={props.movieTrailersError}
                    />
                </TabPanel>
                <TabPanel key={props.movieId} >
                    <Similar type={'movies'} path={props.path} id={props.movieId}
                             getSimilar={props.getSimilar} similar={props.similar}
                             isLoading={props.movieSimilarIsLoading}
                             error={props.movieSimilarError}
                    />
                </TabPanel>
                <TabPanel>

                </TabPanel>

        </Tabs>
    )
}

export default MovieTabs;