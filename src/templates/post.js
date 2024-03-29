import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/Bio";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import styles from "./post.module.css";
import "./prism-okaidia.css";

export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  const date = postNode.fields.date;
  const coverImg = post.cover.childImageSharp.fluid;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <Layout>
      <main>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <div className={styles.postMeta}>
            {date} &mdash; {postNode.timeToRead} Min Read{" "}
            <Img className={styles.postImageWrapper} fluid={coverImg}></Img>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className={styles.postMeta}>
            <PostTags tags={post.tags} />
          </div>
          <hr />
          <Bio config={config} />
        </div>
        <nav>
          <ul className={styles.pagination}>
            <li>
              <Link to={prevslug} rel="prev">
                ← {prevtitle}
              </Link>
            </li>
            <li>
              <Link to={nextslug} rel="next">
                {nexttitle} →
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        categories
        tags
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
