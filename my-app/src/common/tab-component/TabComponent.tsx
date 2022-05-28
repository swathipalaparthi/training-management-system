import { useState } from "react";
import { CourseTab } from "../../pages/admin/CourseTab";
import { EventsTab } from "../../pages/admin/EventsTab";
import { TopicsTab } from "../../pages/admin/TopicsTab";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";

export const TabComponent: React.FC<{
    readonly config: any
}> = ({ config }) => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div className="Tabs">
            {/* Tab nav */}
            <ul className="nav">
                {
                    config.map((item: any, index: number) => {
                        return (<> 
                            <TabNavItem title={item.title} id={`${index + 1}`} activeTab={`${activeTab}`} setActiveTab={setActiveTab} />

                        </>)
                    })
                }
                {/* <TabNavItem title="Courses" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Topics" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Events" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/> */}
            </ul>
            <div className="outlet">
                {
                    config.map((item: any, index: number) => {
                        return (<>
                            <TabContent id={`${index + 1}`} activeTab={activeTab}>
                                <item.component />
                            </TabContent>
                        </>)
                    })
                }
                {/* <TabContent id="tab1" activeTab={activeTab}>
          <CourseTab/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <TopicsTab/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <EventsTab/>
        </TabContent> */}
            </div>
        </div>
    );
}