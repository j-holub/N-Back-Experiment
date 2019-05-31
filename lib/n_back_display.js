
// renders a 3x3 grid where the cell determined by numeric_value is colored
function render_grid(numeric_value){
	grid_html_string = "<div id=\"grid\">";
	for(let i=1; i<=9; i++){
		grid_html_string += i==numeric_value ? "<div id=\"target\"></div>" : "<div></div>"
	}
	grid_html_string += "</div>"

	return grid_html_string
}


// renders an empty grid for the fixations
function empty_grid(){
	grid_html_string = "<div id=\"grid\">";
	for(let i=1; i<=9; i++){
		grid_html_string += "<div></div>"
	}
	grid_html_string += "</div>"

	return grid_html_string
}
