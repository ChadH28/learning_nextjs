import Head from 'next/head'

export default function MetaHead ({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

MetaHead.defaultProps = {
  title: 'Web News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
}