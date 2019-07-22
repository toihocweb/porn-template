let containerTabs = document.getElementById("tabs");

// get info Tabs
const getInfoTabs = container =>{
	return [...container.querySelectorAll(".tabs__content__item")];
}

//get links tab
const getLinksTab = container =>{
	return [...container.querySelectorAll("a[data-tab]")];
}



const activeTab = (linktab,container) => {
		let tabsInfo = getInfoTabs(container),
				LinksTab = getLinksTab(container);
		
	LinksTab.map(info => info.classList.remove("active-link"));
		tabsInfo.map(info => info.classList.remove("active-tab"));
		tabsInfo.map(info => {
				if(linktab.getAttribute("data-tab") === info.getAttribute("id")){
					info.classList.add("active-tab");
					linktab.classList.add("active-link");
					
				}
				
			
			
		})

	
	
}


const getLinkTab = e => {
		let target = e.target;
		if(target.tagName === "A"){
				activeTab(target,containerTabs);
		}	
}


containerTabs.addEventListener("click", getLinkTab);



