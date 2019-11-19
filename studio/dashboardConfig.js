export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd44b67d8b20956df3739de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eeas1rjt',
                  apiId: '02a52fcb-5373-43d3-b543-a752e9179503'
                },
                {
                  buildHookId: '5dd44b6710e6a962290be64c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nenbwss6',
                  apiId: '6aa733dd-d250-4a8a-99e3-0d931e18f411'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/one2many/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nenbwss6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
