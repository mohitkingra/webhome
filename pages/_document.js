import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage()
		const styles = flush()
		return { html, head, errorHtml, chunks, styles }
	}

	render() {
		return (
			<html>
				<Head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<title Mohit Kingra />
					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
					<link rel="stylesheet" href="/static/styles/site.min.css" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.7/typicons.min.css" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
					<link rel="stylesheet" href="/static/styles/post_layout.css" />
					<link rel="stylesheet" href="/keystone/styles/content/editor.min.css" />
				</Head>
				<body>
					<Main />
					<script src='/static/js/jquery/jquery-1.11.3.min.js' />
					<script src='/static/js/bootstrap/bootstrap-3.3.5.min.js' />
					<script src='/keystone/js/content/editor.js' />
					<script src='/static/js/common/ui.js' />
					<NextScript />
					<footer>
						<p> Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a></p> 
						<p> Copyright <a href="http://www.linkedin.com/in/mohit-kingra" target="_blank">Mohit Kingra</a> 
							<a href='http://www.youtube.com/user/mohitkingra2010' target="_blank"><i class="typcn typcn-social-youtube"></i></a>
							<a href='http://www.facebook.com/mohitkingra'  target="_blank"><i class="typcn typcn-social-facebook"></i></a>
							<a href='http://www.instagram.com/mohitkingra'  target="_blank"><i class="typcn typcn-social-instagram"></i></a>
							<a href='http://www.twitter.com/mohitkingra'  target="_blank"><i class="typcn typcn-social-twitter"></i></a>
							<a href='https://www.flickr.com/people/160932312@N02/'  target="_blank"><i class="typcn typcn-social-flickr"></i></a>
						</p>
					</footer>
				</body>
			</html>
			)
	}
}