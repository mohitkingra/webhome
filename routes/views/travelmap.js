// Export our app routes
exports = module.exports = function (req, res) {
    // Render some simple boilerplate html
    function renderFullPage() {
    // Note the div class name here, we will use that as a hook for our React code
   // We are also adding the bundled javascript code 
      return `
		<!doctype html>
		<html>
            <head>
                <title>My Travel Map</title>
            </head>
			<body>
        		<div class="react-container">
        		</div>
				<script src="index.bundle.js"></script>
			</body>
		</html>
		`;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
};