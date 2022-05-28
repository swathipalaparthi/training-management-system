import { TabComponent } from "../../common/tab-component/TabComponent"
import { CourseTab } from "./CourseTab"
import { EventsTab } from "./EventsTab"
import { TopicsTab } from "./TopicsTab"

export const Admin = () => {
    const config = [{
        component:CourseTab,
        title:'Courses'
    },
    {
        component:TopicsTab,
        title:'Topics'
    },
    {
        component:EventsTab,
        title:'Events'
    }
]
    return (<>
    <TabComponent config={config}/>
    </>)
}