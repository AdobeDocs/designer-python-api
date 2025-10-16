/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/designer-python-api/',

  siteMetadata: {
		home: {
			title: 'Designer',
			path: 'https://www.adobe.com/products/substance3d/apps/designer.html'
		},
		pages: [
			{
				title: 'Python API',
				path: 'https://adobedocs.github.io/designer-python-api/'
			},
			{
				title: 'Guides & Examples',
				path: '/guides/'
			},
			{
				title: 'API Reference',
				path: '/api/'
			},
			{
				title: 'Documentation',
				path: 'https://adobe.com/go/Substance-3D-doc-Designer'
			},
			{
        title: 'Support',
        menu: [
          {
            title: 'Discord',
            path: 'https://discord.gg/5QuYaYrV'
          },
          {
            title: 'Forum',
            path: 'https://adobe.com/go/Substance-3D-forum-Designer'
          }
        ]
			}
		],
		subPages: [
			{
				title: "Guides & Examples",
				header: true,
				path: "/guides/examples/",
				pages: [
					/*{
						title : "Guides",
						path: "/guides/",
						pages: [
							{
								title: "Creating a Python plugin",
								path: "/guides/creating-python-plugin/"
							},
							{
								title: "Using external modules",
								path: "/guides/using-external-modules/"
							},
							{
								title: "Using external plugins",
								path: "/guides/loading-external-plugins/"
							},
							{
								title: "Remote control",
								path: "/guides/remote-control/"
							},
							{
								title: "Qt6 migration",
								path: "/guides/qt6-migration/"
							}
						]
					},*/
					{
						title : "Examples",
						path: "/guides/examples/",
						pages: [
							{
								title: "Create a compositing graph with some nodes",
								path: "/guides/examples/compositing_graph/"
							},
							{
								title: "Use some objects in a graph (Frames, Pins, Comments)",
								path: "/guides/examples/graph_object/"
							},
							{
								title: "Work with instances",
								path: "/guides/examples/instance/"
							},
							{
								title: "Control a parameter with a function",
								path: "/guides/examples/parameters/"
							}
						]
					}
				]
			},
			{
				title: "Python API",
				header: true,
				path: "https://adobedocs.github.io/designer-python-api/",
				pages: [
					{
						title : "Home",
						path: "https://adobedocs.github.io/designer-python-api/",
					}
				]
			}
		]
  	},
	plugins: [`@adobe/gatsby-theme-aio`]
};

