import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Trailers from "../common/Trailers/Trailers";
import Similar from "../common/Similar/Similar";

const TvTabs = (props) => {
    return (
        <Tabs>
            <div className="col-12">
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
                <TabPanel>
                    <Trailers trailers={props.trailers} id={props.tvId} getVideos={props.getVideos} />
                </TabPanel>
                <TabPanel key={props.tvId} >
                    <Similar type={'tv'} path={props.path} id={props.tvId} getSimilar={props.getSimilar} similar={props.similar} />
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default TvTabs;