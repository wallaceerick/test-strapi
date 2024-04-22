module.exports = ({ env }) => ({
  // https://market.strapi.io/plugins/strapi-plugin-netlify-deployments
  'netlify-deployments': {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_ACCESS_TOKEN,
      sites: [
        // https://app.netlify.com/sites/strapi-orbital/configuration/deploys#continuous-deployment
        {
          name: 'CMS',
          id: '2035470b-f7f8-48d3-86e7-040ab18a6658',
          buildHook: 'https://api.netlify.com/build_hooks/6626b2dbdf368822df4717af',
          branch: 'main'
        }
      ]
    },
  },
  // https://market.strapi.io/plugins/strapi-plugin-import-export-entries
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  }
});
