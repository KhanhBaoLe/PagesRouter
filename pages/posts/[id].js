import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
export default function Post({ postData }) {
    return (
        <Layout>
            {/* Add this <Head> tag */}
            <Head>
                <title>{postData.title}</title>
            </Head>

            {/* Keep the existing code here */}
        </Layout>
    );
}
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
// export default function Post({ postData }) {
//     return (
//         <Layout>
//             {postData.title}
//             <br />
//             {postData.id}
//             <br />
//             {postData.date}
//             <br />
//             <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//         </Layout>
//     );
// }

