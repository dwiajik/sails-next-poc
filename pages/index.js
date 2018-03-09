import Head from 'next/head';
import MenuVertical from '../components/MenuVertical';
import '../components/menu.css';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' />
    </Head>
    <MenuVertical />
  </div>
)