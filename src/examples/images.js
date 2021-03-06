import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import img from "../images/image1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "image1.jpeg"}) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image2.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    return (
            <section className="images">
                <article className="single-image">
                    <h3>Basic image</h3>
                    <img src={img} width= "100%" alt=""/>
                </article>
                <article className="single-image">
                    <h3>FixedImage/blur</h3>
                    <Image fixed={data.fixed.childImageSharp.fixed} />
                </article>
                <article className="single-image">
                    <h3>Fluid Image/SVG</h3>
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                </article>
            </section>
    )
}

export default Images
