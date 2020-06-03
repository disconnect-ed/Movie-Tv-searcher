import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import UserLists from "./UserLists";


const UserProfileTabs = (props) => {
    return (
        <>
            <Tabs>

                <TabList>
                    <div className="d-flex">
                        <Tab>
                            <div className="col-6 text-center">
                                <div >
                                    <h5>Фильмы</h5>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="col-6 text-center">
                                <div>
                                    <h5>Сериалы</h5>
                                </div>
                            </div>
                        </Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <UserLists getFavorite={props.getFavoriteMovies}
                               session_id={props.session_id}
                               favorite={props.favoriteMovies}
                               path={'movies'}
                               onPageChanged={props.favoriteMoviesPageChange}
                    />
                </TabPanel>
                <TabPanel  >
                    <UserLists getFavorite={props.getFavoriteTv}
                               session_id={props.session_id}
                               favorite={props.favoriteTv}
                               path={'tv'}
                               onPageChanged={props.favoriteTvPageChange}
                    />
                </TabPanel>

            </Tabs>
        </>
    )
}

export default UserProfileTabs