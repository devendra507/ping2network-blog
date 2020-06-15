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
                  buildHookId: '5ee79a914eb657cf6bcaf5d9',
                  title: 'Sanity Studio',
                  name: 'ping2network-blog-studio',
                  apiId: '67bec11a-35f9-43b7-aec5-bccdabab318f'
                },
                {
                  buildHookId: '5ee79a912dff3604c0e1ccb0',
                  title: 'Blog Website',
                  name: 'ping2network-blog',
                  apiId: '24c35730-0438-4fa5-8549-e1ecb167b3db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devendra507/ping2network-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ping2network-blog.netlify.app', category: 'apps' }
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
