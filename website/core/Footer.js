/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('introduction.html')}>Introduction</a>
            <a href={this.docUrl('quickstart.html')}>Quickstart</a>
            <a href={this.docUrl('data_model.html')}>Data Model</a>
            <a href={this.docUrl('operations.html')}>Supported Operations</a>
          </div>
          <div>
            <h5><a href={this.docUrl('examples.html')}>Example Applications</a></h5>
            <a href={this.docUrl('dashcam_lane_change.html')}>Detecting Lane Changes</a>
            <a href={this.docUrl('turning_movement_count.html')}>Turning Movement Count</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/mit-vaas/vaas/">GitHub</a>
            <iframe src="https://ghbtns.com/github-btn.html?user=mit-vaas&repo=vaas&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
