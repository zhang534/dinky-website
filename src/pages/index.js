import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <span style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;
            一站式 FlinkSQL & SQL DataOps <br />
          基于 Apache Flink 二次开发，无侵入，开箱即用<br />&nbsp;&nbsp;&nbsp;&nbsp;
            实时即未来，批流为一体<br /><br />
        </span>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ borderRadius: '2rem', border: '1px solid #42b983' }}
            to="https://github.com/DataLinkDC/dlink">
            GitHub
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            style={{ borderRadius: '2rem', border: '1px solid #42b983' }}
            to="https://gitee.com/mirrors/Dlink">
            Gitee
          </Link>
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            style={{ backgroundColor: '#42b983', borderRadius: '2rem', border: '1px solid #42b983' }}
            to="/docs/intro">
            Quick Start
          </Link>
           &nbsp;&nbsp;
          <span className={styles.indexCtasGitHubButtonWrapper}>
               <iframe
                 className={styles.indexCtasGitHubButton}
                 src="https://ghbtns.com/github-btn.html?user=DataLinkDC&amp;repo=dlink&amp;type=star&amp;count=true&amp;size=large"
                 width={160}
                 height={30}
                 title="GitHub Stars"
               />
              {/*<br/>*/}
               {/*<iframe*/}
               {/*    className={styles.indexCtasGitHubButton}*/}
               {/*    src="https://ghbtns.com/github-btn.html?user=DataLinkDC&amp;repo=dlink&amp;type=fork&amp;count=true&amp;size=large"*/}
               {/*    width={160}*/}
               {/*    height={30}*/}
               {/*    title="GitHub Forks"*/}
               {/*/>*/}
             </span>
        </div>
      </div>
    </header>
  );
}
// structure wrapper
function Structure() {
    const { siteConfig } = useDocusaurusContext();
    return (
            <div className={clsx("structure" , styles.structure)}>
                <div></div>
                <div className="image"><img src="http://www.aiwenmo.com/dinky/docs/zh-CN/concept_architecture/architecture/dinky.png" alt="structure"/></div>
                <div className="text">
                    <div className="title">
                        {siteConfig.customFields.structTitle}
                    </div><br/>
                    {/*<div className="sub-title">*/}
                    {/*    {siteConfig.customFields.structSubTitle}*/}
                    {/*</div><br/>*/}
                    <div className="description">
                        {/*{siteConfig.customFields.structDescription}*/}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Dinky 是一个开箱即用的一站式实时计算平台<br/>
                        以 Apache Flink 为基础，连接 OLAP 和数据湖等众多框架 <br/>
                        致力于流批一体和湖仓一体的建设与实践。
                    </div> <br/>
                    <a href={siteConfig.customFields.learningMore} target="_blank" className="action-button">
                        学习更多
                    </a>
                </div>
            </div>
    );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description ="为 Apache Flink 而生，让 Flink SQL 纵享丝滑 <head />">
      <HomepageHeader />
        <Structure />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
