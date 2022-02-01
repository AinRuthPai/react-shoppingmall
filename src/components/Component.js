import React, { Component } from "react";
import Disqus from "disqus-react";
import { DiscussionEmbed, CommentCount, CommentEmbed, Recommendations } from "disqus-react";

export default class extends Component {
  render() {
    const disqusShortname = "your-site-shortname";
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Title of Your Article",
    };

    return (
      <div className='article-container'>
        <CommentCount
          shortname='example'
          config={{
            url: this.props.article.url,
            identifier: this.props.article.id,
            title: this.props.article.title,
          }}>
          {/* Placeholder Text */}
          Comments
        </CommentCount>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

        <CommentEmbed commentId={this.props.article.featuredCommentId} showMedia={true} showParentComment={true} width={420} height={320} />
        <DiscussionEmbed
          shortname='example'
          config={{
            url: this.props.article.url,
            identifier: this.props.article.id,
            title: this.props.article.title,
            language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
          }}
        />
        <Recommendations
          shortname='example'
          config={{
            url: this.props.article.url,
            identifier: this.props.article.id,
            title: this.props.article.title,
          }}
        />
      </div>
    );
  }
}
