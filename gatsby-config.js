/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Gatsby tutorial",
    description: "some random description",
    author: "@JohnDoe",
    data: ["item 1", "item 2"],
    person: {name: "peter", age: 32}
  },
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,`gatsby-plugin-styled-components`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
    
  },{
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `5ryn8cgakwa1`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.ACCESS_TOKEN,
    },
  },
],
}
