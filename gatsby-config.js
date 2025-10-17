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
				path: '/designer-python-api/'
			},
			{
				title: 'Guides & Examples',
				path: '/designer-python-api/guides/examples/'
			},/*
			{
				title: 'API Reference',
				path: '/api/'
			},*/
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
		]/*,
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Dummy an OAuth Client',
            path: '/guides/dummy_oauth_client/'
          },
          {
            title: 'Dummy OAuth using POSTMAN',
            path: '/guides/dummy_using_postman/'
          }
        ]
      },
      {
        title: 'Cat Metrics API',
        path: '/guides/dummy_metrics_api/'
      },
      {
        title: 'Migrating',
        path: '/guides/migrating/'
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]*/
  },
 /* plugins: [`@adobe/gatsby-theme-aio`]*/
};
