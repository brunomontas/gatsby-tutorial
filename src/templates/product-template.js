import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({ 
    data:{
        product:{
            price,
            title,
            image:{fixed},
            info:{info},
        },
    },
 }) => {
    return <Layout>
        <div style={{textAlign: "center"}}>
            <div><Link to = "/products">back to products</Link></div>
            <hi>My single product: {title}</hi>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title}/>
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{info}</p>
                </article>
            </section>
        </div>
    </Layout>
}
export const query = graphql`
query GetSingleProduct($slug:String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      price
      title
      image {
        fixed (width:300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName

