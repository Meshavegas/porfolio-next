type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  return <div className="flex justify-center mt-10"></div>;
}
export default Post;
