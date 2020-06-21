export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eef57d95de0e5559c686e6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ajy4qaod',
                  apiId: '746010ce-6460-4f9b-93b3-e9b52c02dd8f'
                },
                {
                  buildHookId: '5eef57d9ee3a43e849639244',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1tghhaj7',
                  apiId: 'f7cbbc15-d3e8-4328-b675-47aa3faf5b33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prahulkumarachar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1tghhaj7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
