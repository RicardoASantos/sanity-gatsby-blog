export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d08de6b3100be49ea0e8a83',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-58njwy7y',
                  apiId: '4c77faae-6e20-459f-91dd-dfd05c6031fb'
                },
                {
                  buildHookId: '5d08de6bff604c4dc8cd9c14',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b5fb7pds',
                  apiId: '712d7f23-96e6-435d-aae7-930537260443'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RicardoASantos/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b5fb7pds.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
