function showRange(identifier,unit) {
	// Make all modules disappear
	modules = document.getElementsByClassName("stat_module_" + identifier)
	for (var i=0;i<modules.length;i++) {
		//modules[i].setAttribute("style","width:0px;overflow:hidden;")
		// cheesy trick to make the allocated space always whatever the biggest module needs
		// somehow that messes up pulse on the start page tho
		modules[i].setAttribute("style","display:none;")
	}

	// Make requested module appear
	reactivate = document.getElementsByClassName(identifier + "_" + unit)
	for (var i=0;i<reactivate.length;i++) {
		reactivate[i].setAttribute("style","")
	}

	// Set all selectors to unselected
	selectors = document.getElementsByClassName("stat_selector_" + identifier)
	for (var i=0;i<selectors.length;i++) {
		selectors[i].setAttribute("style","")
	}

	// Set the active selector to selected
	reactivate = document.getElementsByClassName("selector_" + identifier + "_" + unit)
	for (var i=0;i<reactivate.length;i++) {
		reactivate[i].setAttribute("style","opacity:0.5;")
	}
}
