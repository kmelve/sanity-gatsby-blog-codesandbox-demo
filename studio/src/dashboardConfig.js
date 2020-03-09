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
                  buildHookId: '5e6669c2a55a14f8156f5389',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-codesandbox-demo-studio',
                  apiId: 'f37bf96a-7aa7-4bb3-af7f-c10a77af09a6'
                },
                {
                  buildHookId: '5e6669c2c2b073423bde28b0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-codesandbox-demo',
                  apiId: 'f3604f92-dc97-4896-93b6-24d294308b82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-gatsby-blog-codesandbox-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-codesandbox-demo.netlify.com', category: 'apps' }
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
