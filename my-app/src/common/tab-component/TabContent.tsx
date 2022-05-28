import React from "react";
 
const TabContent:React.FC<{
    readonly id:string,
    readonly activeTab:string,
    readonly children:any
}> = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
 
export default TabContent;