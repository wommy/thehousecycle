=== beware pseudo code

look in _pages
	apply _template to every other file
	::
	_template is a function
	that runs on every other file in the folder
	apply _template() to [ ... rest arguments]

apply [ var 1,2,3 ] to _template
	prepend _template to about

===

applying varible to _template is too much work
TODO

===

look in _pages
look for _template.html
stringify that
	var _template = `
	<html>
	</html>
		<head>
		</head>
		<body id='root'>
			<main id='content'>
				`#{content}`
			</main>
		</body>

	`
break into two parts @content
for every page in _pages/

	

