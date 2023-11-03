import getPostMetaData from "../../components/getPostMetadata";
import PostPreview from "../../components/PostsPreview";

const homePage = () => {
  const PostMetadata = getPostMetaData();
  const postPreviews = PostMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
}

export default homePage;
