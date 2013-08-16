function ResultsController($scope, $location, $http, $routeParams) {

	console.log($routeParams);
	$scope.username = (!$routeParams.username || $routeParams.username === "" ? "self" : $routeParams.username)
	$scope.count = $routeParams.count
	$scope.tweets = getTweets()


	function getTweets(){

		/* debug
		=============================================== */
		return [
		{
			"created_at":"Thu Aug 08 10:38:51 +0000 2013",
			"id":365421845299728385,
			"id_str":"365421845299728385",
			"text":"\u201cIf you work with people, no matter what your title is, it\u2019s your job to make the people around you feel better, empowered and encouraged\u201d.",
			"source":"\u003ca href=\"http:\/\/tapbots.com\/software\/tweetbot\/mac\" rel=\"nofollow\"\u003eTweetbot for Mac\u003c\/a\u003e",
			"truncated":false,
			"in_reply_to_status_id":null,
			"in_reply_to_status_id_str":null,
			"in_reply_to_user_id":null,
			"in_reply_to_user_id_str":null,
			"in_reply_to_screen_name":null,
			"user":
				{
					"id":42864649,
					"id_str":"42864649",
				"name":"Karolina Szczur",
					"screen_name":"fox",
					"location":"Krak\u00f3w",
					"description":"Pixelfucker at @andyet. thefoxwrit.es + http:\/\/t.co\/yxn7PM8mPY",
					"url":"http:\/\/t.co\/vah0lKcYeo",
					"entities":
						{
							"url":
								{"urls":
									[{	
										"url":"http:\/\/t.co\/vah0lKcYeo",
										"expanded_url":"http:\/\/thefox.is",
										"display_url":"thefox.is",
										"indices":[0,22]
									}]
								},
							"description":
								{"urls":
									[{
										"url":"http:\/\/t.co\/yxn7PM8mPY",
										"expanded_url":"http:\/\/medium.com\/@fox",
										"display_url":"medium.com\/@fox",
										"indices":[40,62]
									}]
								}
						},
						"protected":false,
						"followers_count":3439,
						"friends_count":450,
						"listed_count":139,
						"created_at":"Wed May 27 11:48:42 +0000 2009",
						"favourites_count":128,
						"utc_offset":7200,
						"time_zone":"Warsaw",
						"geo_enabled":true,
						"verified":false,
						"statuses_count":5463,
						"lang":"en",
						"contributors_enabled":false,
						"is_translator":false,
						"profile_background_color":"141E1E",
						"profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/197733467\/bg.jpg",
						"profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/197733467\/bg.jpg",
						"profile_background_tile":false,
						"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3779962725\/71c58ef69ed71cc24226c56d4dd5271b_normal.jpeg",
						"profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3779962725\/71c58ef69ed71cc24226c56d4dd5271b_normal.jpeg",
						"profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/42864649\/1373300834",
						"profile_link_color":"DF3F0F",
						"profile_sidebar_border_color":"000000",
						"profile_sidebar_fill_color":"F5F5F5",
						"profile_text_color":"333333",
						"profile_use_background_image":false,
						"default_profile":false,
						"default_profile_image":false,
						"following":null,
						"follow_request_sent":false,
						"notifications":null
					},
					"geo":null,
					"coordinates":null,
					"place":null,
					"contributors":null,
					"retweet_count":76,
					"favorite_count":28,
					"entities":
						{
							"hashtags":[],
							"symbols":[],
							"urls":[],
							"user_mentions":[]
						},
					"favorited":false,
					"retweeted":false,
					"lang":"en"
				},
				{
					"created_at":"Wed Aug 07 22:10:25 +0000 2013",
					"id":365233496253411330,
					"id_str":"365233496253411330",
					"text":"@bendytree :) it keeps the project alive and kicking :)",
					"source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e",
					"truncated":false,
					"in_reply_to_status_id":365185855670853633,
					"in_reply_to_status_id_str":"365185855670853633",
					"in_reply_to_user_id":60895038,
					"in_reply_to_user_id_str":"60895038",
					"in_reply_to_screen_name":"bendytree",
					"user":
						{
							"id":14350255,
							"id_str":"14350255",
							"name":"Arnout Kazemier",
							"screen_name":"3rdEden",
							"location":"Drachten, the Netherlands",
							"description":"Extraordinary JavaScript Hybrid, founder of Observe.it and Lead Software Engineer at Nodejitsu. Loves real-time, Node.js, NoSQL & other bad-ass technologies",
							"url":"http:\/\/t.co\/TOpcNgUymR",
							"entities":
								{
									"url":
										{"urls":
											[{
												"url":"http:\/\/t.co\/TOpcNgUymR",
												"expanded_url":"http:\/\/observe.it",
												"display_url":"observe.it",
												"indices":[0,22]
											}]
										},
									"description":{"urls":[]}
								},
							"protected":false,
							"followers_count":2374,
							"friends_count":856,
							"listed_count":128,
							"created_at":"Thu Apr 10 11:21:30 +0000 2008",
							"favourites_count":796,
							"utc_offset":7200,
							"time_zone":"Amsterdam",
							"geo_enabled":true,
							"verified":false,
							"statuses_count":14313,
							"lang":"en",
							"contributors_enabled":false,
							"is_translator":false,
							"profile_background_color":"F3585C",
							"profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg",
							"profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg",
							"profile_background_tile":false,
							"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png",
							"profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png",
							"profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14350255\/1364484141",
							"profile_link_color":"0099FF",
							"profile_sidebar_border_color":"000000",
							"profile_sidebar_fill_color":"FFFFFF",
							"profile_text_color":"656565",
							"profile_use_background_image":true,
							"default_profile":false,
							"default_profile_image":false,
							"following":null,
							"follow_request_sent":false,
							"notifications":null},
							"geo":null,
							"coordinates":null,
							"place":null,
							"contributors":null,
							"retweet_count":0,
							"favorite_count":1,
							"entities":
								{
									"hashtags":[],
									"symbols":[],
									"urls":[],
									"user_mentions":
										[{
											"screen_name":"bendytree",
											"name":"Josh Wright",
											"id":60895038,
											"id_str":"60895038",
											"indices":[0,10]
										}]
									},
									"favorited":false,
									"retweeted":false,"lang":"en"	},{"created_at":"Wed Aug 07 18:24:25 +0000 2013","id":365176618282524672,"id_str":"365176618282524672","text":"@bendytree Here's a small summary of advantages, I couldn't fit it in a single tweet: https:\/\/t.co\/66oNfgM4Nn","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":365139974997295107,"in_reply_to_status_id_str":"365139974997295107","in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":14350255,"id_str":"14350255","name":"Arnout Kazemier","screen_name":"3rdEden","location":"Drachten, the Netherlands","description":"Extraordinary JavaScript Hybrid, founder of Observe.it and Lead Software Engineer at Nodejitsu. Loves real-time, Node.js, NoSQL & other bad-ass technologies","url":"http:\/\/t.co\/TOpcNgUymR","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/TOpcNgUymR","expanded_url":"http:\/\/observe.it","display_url":"observe.it","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":2374,"friends_count":856,"listed_count":128,"created_at":"Thu Apr 10 11:21:30 +0000 2008","favourites_count":796,"utc_offset":7200,"time_zone":"Amsterdam","geo_enabled":true,"verified":false,"statuses_count":14313,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"F3585C","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14350255\/1364484141","profile_link_color":"0099FF","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"FFFFFF","profile_text_color":"656565","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"https:\/\/t.co\/66oNfgM4Nn","expanded_url":"https:\/\/gist.github.com\/3rd-Eden\/6176927","display_url":"gist.github.com\/3rd-Eden\/61769\u2026","indices":[86,109]}],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Wed Aug 07 11:09:38 +0000 2013","id":365067204502364161,"id_str":"365067204502364161","text":"wishing there was a npm bootstrap command \u2014 would you be open to it @izs: basically created a index.js, package.js, and tests with assert","source":"\u003ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":9279552,"id_str":"9279552","name":"Nuno Job","screen_name":"dscape","location":"New York","description":"geek. open-source enthusiast. shaping the future of the node.js \u2601 @nodejitsu. made @thenodefirm & @lxjs","url":"http:\/\/t.co\/ttANpT2Dbx","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/ttANpT2Dbx","expanded_url":"http:\/\/nunojob.com","display_url":"nunojob.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":3177,"friends_count":442,"listed_count":177,"created_at":"Sat Oct 06 13:46:29 +0000 2007","favourites_count":2184,"utc_offset":3600,"time_zone":"Lisbon","geo_enabled":true,"verified":false,"statuses_count":17289,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"DBE9ED","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme17\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme17\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3557388878\/b143b6a24766a4b80d54b11d54f5cd59_normal.jpeg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3557388878\/b143b6a24766a4b80d54b11d54f5cd59_normal.jpeg","profile_link_color":"CC3366","profile_sidebar_border_color":"DBE9ED","profile_sidebar_fill_color":"E6F6F9","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":3,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"izs","name":"isaacs","id":8038312,"id_str":"8038312","indices":[68,72]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Fri Aug 02 19:15:07 +0000 2013","id":363377439486918657,"id_str":"363377439486918657","text":"@bendytree Used Draft Night last year, great to see the improvements for this year. Can't wait to use it!","source":"\u003ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":12081452,"id_str":"12081452","name":"Mark M.","screen_name":"iotone","location":"So Cal!","description":"","url":"http:\/\/t.co\/3bg94Rvk63","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/3bg94Rvk63","expanded_url":"http:\/\/mark.itpimps.com","display_url":"mark.itpimps.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":89,"friends_count":149,"listed_count":1,"created_at":"Thu Jan 10 19:03:56 +0000 2008","favourites_count":20,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":1694,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"9AE4E8","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/3172994\/worn-blue.jpg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/3172994\/worn-blue.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/72209741\/pic_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/72209741\/pic_normal.jpg","profile_link_color":"0084B4","profile_sidebar_border_color":"BDDCAD","profile_sidebar_fill_color":"DDFFCC","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Aug 01 16:18:07 +0000 2013","id":362970506946822144,"id_str":"362970506946822144","text":"@bendytree hi, if you need ios app icon , pls let me know i can help you if you like my work , my portfolio - http:\/\/t.co\/TL48gvj3f2","source":"web","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":146308047,"id_str":"146308047","name":"Aditya Chhatrala","screen_name":"AdityaChhatrala","location":"Earth","description":"Visual designer , working on ios icons, UI, logo, game design, modern , minimalist","url":"http:\/\/t.co\/5aZxIpJFAm","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/5aZxIpJFAm","expanded_url":"http:\/\/www.behance.net\/aditya26j","display_url":"behance.net\/aditya26j","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":34,"friends_count":186,"listed_count":0,"created_at":"Fri May 21 03:26:48 +0000 2010","favourites_count":2,"utc_offset":19800,"time_zone":"Mumbai","geo_enabled":false,"verified":false,"statuses_count":385,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"0099B9","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3598462041\/886d7cb0c4a0d9f42289cc1c9d234fe9_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3598462041\/886d7cb0c4a0d9f42289cc1c9d234fe9_normal.png","profile_link_color":"0099B9","profile_sidebar_border_color":"5ED4DC","profile_sidebar_fill_color":"95E8EC","profile_text_color":"3C3940","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"http:\/\/t.co\/TL48gvj3f2","expanded_url":"http:\/\/dribbble.com\/aditya.Chhatrala","display_url":"dribbble.com\/aditya.Chhatra\u2026","indices":[110,132]}],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Wed Jul 31 22:14:20 +0000 2013","id":362697767090532354,"id_str":"362697767090532354","text":"VIRTUAL!!!!! #nhibernate","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":17417502,"id_str":"17417502","name":"fooly1cooly","screen_name":"fooly1cooly","location":"73134","description":"A fictional cosmic entity.","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":30,"friends_count":240,"listed_count":6,"created_at":"Sun Nov 16 03:34:55 +0000 2008","favourites_count":127,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":764,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/752902320\/747b049733f3edf3c951cec44356eb44.png","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/752902320\/747b049733f3edf3c951cec44356eb44.png","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/378800000163383790\/f6631f3844b08e6fd9fed5e9518a747d_normal.jpeg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/378800000163383790\/f6631f3844b08e6fd9fed5e9518a747d_normal.jpeg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/17417502\/1374371647","profile_link_color":"009999","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[{"text":"nhibernate","indices":[13,24]}],"symbols":[],"urls":[],"user_mentions":[]},"favorited":false,"retweeted":false,"lang":"es"},{"created_at":"Tue Jul 30 22:11:22 +0000 2013","id":362334631556677635,"id_str":"362334631556677635","text":"@bendytree Do you have any free copies left of draftnight? I am hosting this year and would love to show off this awesome software!!","source":"web","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":355128947,"id_str":"355128947","name":"Ben Almaguer","screen_name":"assinite","location":"Nashville, Tennessee","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":5,"friends_count":81,"listed_count":0,"created_at":"Sun Aug 14 21:47:27 +0000 2011","favourites_count":0,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":26,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1495767233\/166651_10150116903305676_689060675_7837778_1172193_n_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1495767233\/166651_10150116903305676_689060675_7837778_1172193_n_normal.jpg","profile_link_color":"00CCCC","profile_sidebar_border_color":"420000","profile_sidebar_fill_color":"000000","profile_text_color":"FF0000","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Jul 25 19:20:48 +0000 2013","id":360479768988237824,"id_str":"360479768988237824","text":"@FantasyFBTalk the iOS app is called Draft Board. You can find it also at http:\/\/t.co\/QIao5LslF7 and here @bendytree","source":"\u003ca href=\"http:\/\/tapbots.com\/tweetbot\" rel=\"nofollow\"\u003eTweetbot for iOS\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":360424406759124993,"in_reply_to_status_id_str":"360424406759124993","in_reply_to_user_id":170844186,"in_reply_to_user_id_str":"170844186","in_reply_to_screen_name":"FantasyFBTalk","user":{"id":709416512,"id_str":"709416512","name":"Micah James","screen_name":"FFMagicMan","location":"Search Magic Formula on iTunes","description":"Winner, 2012 FSTA Rankings Challenge. Host, Magic Formula Fantasy Football podcast. http:\/\/t.co\/dYQrLSjWP0 - Here to help you win your #FantasyFootball league.","url":"http:\/\/t.co\/dYQrLSjWP0","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/dYQrLSjWP0","expanded_url":"http:\/\/ffmagicman.com","display_url":"ffmagicman.com","indices":[0,22]}]},"description":{"urls":[{"url":"http:\/\/t.co\/dYQrLSjWP0","expanded_url":"http:\/\/ffmagicman.com","display_url":"ffmagicman.com","indices":[84,106]}]}},"protected":false,"followers_count":2276,"friends_count":463,"listed_count":76,"created_at":"Sat Jul 21 18:57:27 +0000 2012","favourites_count":15,"utc_offset":-14400,"time_zone":"Eastern Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":10859,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/630801317\/upm3rnrtlc2u3xoe5ves.jpeg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/630801317\/upm3rnrtlc2u3xoe5ves.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/378800000107439056\/2e1deedb73526a8fad99e9b6fe86be49_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/378800000107439056\/2e1deedb73526a8fad99e9b6fe86be49_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/709416512\/1351371566","profile_link_color":"13359C","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"C0DFEC","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"http:\/\/t.co\/QIao5LslF7","expanded_url":"http:\/\/bit.ly\/13IiKGJ","display_url":"bit.ly\/13IiKGJ","indices":[74,96]}],"user_mentions":[{"screen_name":"FantasyFBTalk","name":"FantasyFootballTalk","id":170844186,"id_str":"170844186","indices":[0,14]},{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[106,116]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Tue Jul 16 19:57:27 +0000 2013","id":357227499907850240,"id_str":"357227499907850240","text":"@gregstarling @mtmrecognition who are THOSE guys!? Are they from a diversity stock photo??","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":357224650956222464,"in_reply_to_status_id_str":"357224650956222464","in_reply_to_user_id":14186454,"in_reply_to_user_id_str":"14186454","in_reply_to_screen_name":"gregstarling","user":{"id":7856962,"id_str":"7856962","name":"Scott L","screen_name":"okcscott","location":"oklahoma city","description":"5-time Dundie nominee, front-end dev @lifechurchtv, Calvin & Hobbes enthusiast, overzealous soccer fan.","url":"http:\/\/t.co\/kAYUji34vk","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/kAYUji34vk","expanded_url":"http:\/\/scottlesser.com","display_url":"scottlesser.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":381,"friends_count":578,"listed_count":15,"created_at":"Tue Jul 31 19:29:55 +0000 2007","favourites_count":30,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":4769,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"999999","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/375372\/pete2.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/375372\/pete2.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1225154957\/9429_692545341592_17110943_39055696_3301230_n_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1225154957\/9429_692545341592_17110943_39055696_3301230_n_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/7856962\/1348019643","profile_link_color":"222222","profile_sidebar_border_color":"FF9900","profile_sidebar_fill_color":"FF6600","profile_text_color":"000000","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":2,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"gregstarling","name":"Greg Starling","id":14186454,"id_str":"14186454","indices":[0,13]},{"screen_name":"mtmrecognition","name":"MTM Recognition","id":42969426,"id_str":"42969426","indices":[14,29]}]},"favorited":false,"retweeted":false,"lang":"en"}]

		/* live
		===============================================
		var url = "/favorites/" + (!$scope.username ? "?count=" : ($scope.username  + "/?count=")) + $scope.count
		$http.get(url)
			.success(function(response){
				return response
			})
			.error(function(response){
				return response
			})
		*/
	}
}

/*
	how this json object looks
	var tweets = [
		{
			"created_at":"Thu Aug 08 10:38:51 +0000 2013",
			"id":365421845299728385,
			"id_str":"365421845299728385",
			"text":"\u201cIf you work with people, no matter what your title is, it\u2019s your job to make the people around you feel better, empowered and encouraged\u201d.",
			"source":"\u003ca href=\"http:\/\/tapbots.com\/software\/tweetbot\/mac\" rel=\"nofollow\"\u003eTweetbot for Mac\u003c\/a\u003e",
			"truncated":false,
			"in_reply_to_status_id":null,
			"in_reply_to_status_id_str":null,
			"in_reply_to_user_id":null,
			"in_reply_to_user_id_str":null,
			"in_reply_to_screen_name":null,
			"user":
				{
					"id":42864649,
					"id_str":"42864649",
				"name":"Karolina Szczur",
					"screen_name":"fox",
					"location":"Krak\u00f3w",
					"description":"Pixelfucker at @andyet. thefoxwrit.es + http:\/\/t.co\/yxn7PM8mPY",
					"url":"http:\/\/t.co\/vah0lKcYeo",
					"entities":
						{
							"url":
								{"urls":
									[{	
										"url":"http:\/\/t.co\/vah0lKcYeo",
										"expanded_url":"http:\/\/thefox.is",
										"display_url":"thefox.is",
										"indices":[0,22]
									}]
								},
							"description":
								{"urls":
									[{
										"url":"http:\/\/t.co\/yxn7PM8mPY",
										"expanded_url":"http:\/\/medium.com\/@fox",
										"display_url":"medium.com\/@fox",
										"indices":[40,62]
									}]
								}
						},
						"protected":false,
						"followers_count":3439,
						"friends_count":450,
						"listed_count":139,
						"created_at":"Wed May 27 11:48:42 +0000 2009",
						"favourites_count":128,
						"utc_offset":7200,
						"time_zone":"Warsaw",
						"geo_enabled":true,
						"verified":false,
						"statuses_count":5463,
						"lang":"en",
						"contributors_enabled":false,
						"is_translator":false,
						"profile_background_color":"141E1E",
						"profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/197733467\/bg.jpg",
						"profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/197733467\/bg.jpg",
						"profile_background_tile":false,
						"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3779962725\/71c58ef69ed71cc24226c56d4dd5271b_normal.jpeg",
						"profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3779962725\/71c58ef69ed71cc24226c56d4dd5271b_normal.jpeg",
						"profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/42864649\/1373300834",
						"profile_link_color":"DF3F0F",
						"profile_sidebar_border_color":"000000",
						"profile_sidebar_fill_color":"F5F5F5",
						"profile_text_color":"333333",
						"profile_use_background_image":false,
						"default_profile":false,
						"default_profile_image":false,
						"following":null,
						"follow_request_sent":false,
						"notifications":null
					},
					"geo":null,
					"coordinates":null,
					"place":null,
					"contributors":null,
					"retweet_count":76,
					"favorite_count":28,
					"entities":
						{
							"hashtags":[],
							"symbols":[],
							"urls":[],
							"user_mentions":[]
						},
					"favorited":false,
					"retweeted":false,
					"lang":"en"
				},
				{
					"created_at":"Wed Aug 07 22:10:25 +0000 2013",
					"id":365233496253411330,
					"id_str":"365233496253411330",
					"text":"@bendytree :) it keeps the project alive and kicking :)",
					"source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e",
					"truncated":false,
					"in_reply_to_status_id":365185855670853633,
					"in_reply_to_status_id_str":"365185855670853633",
					"in_reply_to_user_id":60895038,
					"in_reply_to_user_id_str":"60895038",
					"in_reply_to_screen_name":"bendytree",
					"user":
						{
							"id":14350255,
							"id_str":"14350255",
							"name":"Arnout Kazemier",
							"screen_name":"3rdEden",
							"location":"Drachten, the Netherlands",
							"description":"Extraordinary JavaScript Hybrid, founder of Observe.it and Lead Software Engineer at Nodejitsu. Loves real-time, Node.js, NoSQL & other bad-ass technologies",
							"url":"http:\/\/t.co\/TOpcNgUymR",
							"entities":
								{
									"url":
										{"urls":
											[{
												"url":"http:\/\/t.co\/TOpcNgUymR",
												"expanded_url":"http:\/\/observe.it",
												"display_url":"observe.it",
												"indices":[0,22]
											}]
										},
									"description":{"urls":[]}
								},
							"protected":false,
							"followers_count":2374,
							"friends_count":856,
							"listed_count":128,
							"created_at":"Thu Apr 10 11:21:30 +0000 2008",
							"favourites_count":796,
							"utc_offset":7200,
							"time_zone":"Amsterdam",
							"geo_enabled":true,
							"verified":false,
							"statuses_count":14313,
							"lang":"en",
							"contributors_enabled":false,
							"is_translator":false,
							"profile_background_color":"F3585C",
							"profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg",
							"profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg",
							"profile_background_tile":false,
							"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png",
							"profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png",
							"profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14350255\/1364484141",
							"profile_link_color":"0099FF",
							"profile_sidebar_border_color":"000000",
							"profile_sidebar_fill_color":"FFFFFF",
							"profile_text_color":"656565",
							"profile_use_background_image":true,
							"default_profile":false,
							"default_profile_image":false,
							"following":null,
							"follow_request_sent":false,
							"notifications":null},
							"geo":null,
							"coordinates":null,
							"place":null,
							"contributors":null,
							"retweet_count":0,
							"favorite_count":1,
							"entities":
								{
									"hashtags":[],
									"symbols":[],
									"urls":[],
									"user_mentions":
										[{
											"screen_name":"bendytree",
											"name":"Josh Wright",
											"id":60895038,
											"id_str":"60895038",
											"indices":[0,10]
										}]
									},
									"favorited":false,
									"retweeted":false,
									"lang":"en"
								},
								{
									"created_at":"Wed Aug 07 18:24:25 +0000 2013","id":365176618282524672,"id_str":"365176618282524672","text":"@bendytree Here's a small summary of advantages, I couldn't fit it in a single tweet: https:\/\/t.co\/66oNfgM4Nn","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":365139974997295107,"in_reply_to_status_id_str":"365139974997295107","in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":14350255,"id_str":"14350255","name":"Arnout Kazemier","screen_name":"3rdEden","location":"Drachten, the Netherlands","description":"Extraordinary JavaScript Hybrid, founder of Observe.it and Lead Software Engineer at Nodejitsu. Loves real-time, Node.js, NoSQL & other bad-ass technologies","url":"http:\/\/t.co\/TOpcNgUymR","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/TOpcNgUymR","expanded_url":"http:\/\/observe.it","display_url":"observe.it","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":2374,"friends_count":856,"listed_count":128,"created_at":"Thu Apr 10 11:21:30 +0000 2008","favourites_count":796,"utc_offset":7200,"time_zone":"Amsterdam","geo_enabled":true,"verified":false,"statuses_count":14313,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"F3585C","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/827070800\/c983eb8a144e05675ec38265b7e5dbdf.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2645913685\/213506c3d06495f6c69adc5db04013e6_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14350255\/1364484141","profile_link_color":"0099FF","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"FFFFFF","profile_text_color":"656565","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"https:\/\/t.co\/66oNfgM4Nn","expanded_url":"https:\/\/gist.github.com\/3rd-Eden\/6176927","display_url":"gist.github.com\/3rd-Eden\/61769\u2026","indices":[86,109]}],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Wed Aug 07 11:09:38 +0000 2013","id":365067204502364161,"id_str":"365067204502364161","text":"wishing there was a npm bootstrap command \u2014 would you be open to it @izs: basically created a index.js, package.js, and tests with assert","source":"\u003ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":9279552,"id_str":"9279552","name":"Nuno Job","screen_name":"dscape","location":"New York","description":"geek. open-source enthusiast. shaping the future of the node.js \u2601 @nodejitsu. made @thenodefirm & @lxjs","url":"http:\/\/t.co\/ttANpT2Dbx","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/ttANpT2Dbx","expanded_url":"http:\/\/nunojob.com","display_url":"nunojob.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":3177,"friends_count":442,"listed_count":177,"created_at":"Sat Oct 06 13:46:29 +0000 2007","favourites_count":2184,"utc_offset":3600,"time_zone":"Lisbon","geo_enabled":true,"verified":false,"statuses_count":17289,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"DBE9ED","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme17\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme17\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3557388878\/b143b6a24766a4b80d54b11d54f5cd59_normal.jpeg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3557388878\/b143b6a24766a4b80d54b11d54f5cd59_normal.jpeg","profile_link_color":"CC3366","profile_sidebar_border_color":"DBE9ED","profile_sidebar_fill_color":"E6F6F9","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":3,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"izs","name":"isaacs","id":8038312,"id_str":"8038312","indices":[68,72]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Fri Aug 02 19:15:07 +0000 2013","id":363377439486918657,"id_str":"363377439486918657","text":"@bendytree Used Draft Night last year, great to see the improvements for this year. Can't wait to use it!","source":"\u003ca href=\"http:\/\/www.tweetdeck.com\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":12081452,"id_str":"12081452","name":"Mark M.","screen_name":"iotone","location":"So Cal!","description":"","url":"http:\/\/t.co\/3bg94Rvk63","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/3bg94Rvk63","expanded_url":"http:\/\/mark.itpimps.com","display_url":"mark.itpimps.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":89,"friends_count":149,"listed_count":1,"created_at":"Thu Jan 10 19:03:56 +0000 2008","favourites_count":20,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":1694,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"9AE4E8","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/3172994\/worn-blue.jpg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/3172994\/worn-blue.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/72209741\/pic_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/72209741\/pic_normal.jpg","profile_link_color":"0084B4","profile_sidebar_border_color":"BDDCAD","profile_sidebar_fill_color":"DDFFCC","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Aug 01 16:18:07 +0000 2013","id":362970506946822144,"id_str":"362970506946822144","text":"@bendytree hi, if you need ios app icon , pls let me know i can help you if you like my work , my portfolio - http:\/\/t.co\/TL48gvj3f2","source":"web","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":146308047,"id_str":"146308047","name":"Aditya Chhatrala","screen_name":"AdityaChhatrala","location":"Earth","description":"Visual designer , working on ios icons, UI, logo, game design, modern , minimalist","url":"http:\/\/t.co\/5aZxIpJFAm","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/5aZxIpJFAm","expanded_url":"http:\/\/www.behance.net\/aditya26j","display_url":"behance.net\/aditya26j","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":34,"friends_count":186,"listed_count":0,"created_at":"Fri May 21 03:26:48 +0000 2010","favourites_count":2,"utc_offset":19800,"time_zone":"Mumbai","geo_enabled":false,"verified":false,"statuses_count":385,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"0099B9","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/3598462041\/886d7cb0c4a0d9f42289cc1c9d234fe9_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/3598462041\/886d7cb0c4a0d9f42289cc1c9d234fe9_normal.png","profile_link_color":"0099B9","profile_sidebar_border_color":"5ED4DC","profile_sidebar_fill_color":"95E8EC","profile_text_color":"3C3940","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"http:\/\/t.co\/TL48gvj3f2","expanded_url":"http:\/\/dribbble.com\/aditya.Chhatrala","display_url":"dribbble.com\/aditya.Chhatra\u2026","indices":[110,132]}],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Wed Jul 31 22:14:20 +0000 2013","id":362697767090532354,"id_str":"362697767090532354","text":"VIRTUAL!!!!! #nhibernate","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":17417502,"id_str":"17417502","name":"fooly1cooly","screen_name":"fooly1cooly","location":"73134","description":"A fictional cosmic entity.","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":30,"friends_count":240,"listed_count":6,"created_at":"Sun Nov 16 03:34:55 +0000 2008","favourites_count":127,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":764,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/752902320\/747b049733f3edf3c951cec44356eb44.png","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/752902320\/747b049733f3edf3c951cec44356eb44.png","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/378800000163383790\/f6631f3844b08e6fd9fed5e9518a747d_normal.jpeg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/378800000163383790\/f6631f3844b08e6fd9fed5e9518a747d_normal.jpeg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/17417502\/1374371647","profile_link_color":"009999","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[{"text":"nhibernate","indices":[13,24]}],"symbols":[],"urls":[],"user_mentions":[]},"favorited":false,"retweeted":false,"lang":"es"},{"created_at":"Tue Jul 30 22:11:22 +0000 2013","id":362334631556677635,"id_str":"362334631556677635","text":"@bendytree Do you have any free copies left of draftnight? I am hosting this year and would love to show off this awesome software!!","source":"web","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":60895038,"in_reply_to_user_id_str":"60895038","in_reply_to_screen_name":"bendytree","user":{"id":355128947,"id_str":"355128947","name":"Ben Almaguer","screen_name":"assinite","location":"Nashville, Tennessee","description":"","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":5,"friends_count":81,"listed_count":0,"created_at":"Sun Aug 14 21:47:27 +0000 2011","favourites_count":0,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":26,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/a0.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1495767233\/166651_10150116903305676_689060675_7837778_1172193_n_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1495767233\/166651_10150116903305676_689060675_7837778_1172193_n_normal.jpg","profile_link_color":"00CCCC","profile_sidebar_border_color":"420000","profile_sidebar_fill_color":"000000","profile_text_color":"FF0000","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[0,10]}]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Jul 25 19:20:48 +0000 2013","id":360479768988237824,"id_str":"360479768988237824","text":"@FantasyFBTalk the iOS app is called Draft Board. You can find it also at http:\/\/t.co\/QIao5LslF7 and here @bendytree","source":"\u003ca href=\"http:\/\/tapbots.com\/tweetbot\" rel=\"nofollow\"\u003eTweetbot for iOS\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":360424406759124993,"in_reply_to_status_id_str":"360424406759124993","in_reply_to_user_id":170844186,"in_reply_to_user_id_str":"170844186","in_reply_to_screen_name":"FantasyFBTalk","user":{"id":709416512,"id_str":"709416512","name":"Micah James","screen_name":"FFMagicMan","location":"Search Magic Formula on iTunes","description":"Winner, 2012 FSTA Rankings Challenge. Host, Magic Formula Fantasy Football podcast. http:\/\/t.co\/dYQrLSjWP0 - Here to help you win your #FantasyFootball league.","url":"http:\/\/t.co\/dYQrLSjWP0","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/dYQrLSjWP0","expanded_url":"http:\/\/ffmagicman.com","display_url":"ffmagicman.com","indices":[0,22]}]},"description":{"urls":[{"url":"http:\/\/t.co\/dYQrLSjWP0","expanded_url":"http:\/\/ffmagicman.com","display_url":"ffmagicman.com","indices":[84,106]}]}},"protected":false,"followers_count":2276,"friends_count":463,"listed_count":76,"created_at":"Sat Jul 21 18:57:27 +0000 2012","favourites_count":15,"utc_offset":-14400,"time_zone":"Eastern Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":10859,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/630801317\/upm3rnrtlc2u3xoe5ves.jpeg","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/630801317\/upm3rnrtlc2u3xoe5ves.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/378800000107439056\/2e1deedb73526a8fad99e9b6fe86be49_normal.png","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/378800000107439056\/2e1deedb73526a8fad99e9b6fe86be49_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/709416512\/1351371566","profile_link_color":"13359C","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"C0DFEC","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[],"symbols":[],"urls":[{"url":"http:\/\/t.co\/QIao5LslF7","expanded_url":"http:\/\/bit.ly\/13IiKGJ","display_url":"bit.ly\/13IiKGJ","indices":[74,96]}],"user_mentions":[{"screen_name":"FantasyFBTalk","name":"FantasyFootballTalk","id":170844186,"id_str":"170844186","indices":[0,14]},{"screen_name":"bendytree","name":"Josh Wright","id":60895038,"id_str":"60895038","indices":[106,116]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Tue Jul 16 19:57:27 +0000 2013","id":357227499907850240,"id_str":"357227499907850240","text":"@gregstarling @mtmrecognition who are THOSE guys!? Are they from a diversity stock photo??","source":"\u003ca href=\"http:\/\/itunes.apple.com\/us\/app\/twitter\/id409789998?mt=12\" rel=\"nofollow\"\u003eTwitter for Mac\u003c\/a\u003e","truncated":false,"in_reply_to_status_id":357224650956222464,"in_reply_to_status_id_str":"357224650956222464","in_reply_to_user_id":14186454,"in_reply_to_user_id_str":"14186454","in_reply_to_screen_name":"gregstarling","user":{"id":7856962,"id_str":"7856962","name":"Scott L","screen_name":"okcscott","location":"oklahoma city","description":"5-time Dundie nominee, front-end dev @lifechurchtv, Calvin & Hobbes enthusiast, overzealous soccer fan.","url":"http:\/\/t.co\/kAYUji34vk","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/kAYUji34vk","expanded_url":"http:\/\/scottlesser.com","display_url":"scottlesser.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":381,"friends_count":578,"listed_count":15,"created_at":"Tue Jul 31 19:29:55 +0000 2007","favourites_count":30,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":4769,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"999999","profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/375372\/pete2.gif","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/375372\/pete2.gif","profile_background_tile":false,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1225154957\/9429_692545341592_17110943_39055696_3301230_n_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1225154957\/9429_692545341592_17110943_39055696_3301230_n_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/7856962\/1348019643","profile_link_color":"222222","profile_sidebar_border_color":"FF9900","profile_sidebar_fill_color":"FF6600","profile_text_color":"000000","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":false,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":0,"favorite_count":2,"entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"screen_name":"gregstarling","name":"Greg Starling","id":14186454,"id_str":"14186454","indices":[0,13]},{"screen_name":"mtmrecognition","name":"MTM Recognition","id":42969426,"id_str":"42969426","indices":[14,29]}]},"favorited":false,"retweeted":false,"lang":"en"}]

}

*/