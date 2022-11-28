import { usePosts } from 'hooks/usePosts';
import Link from 'next/link';
import PostCard from './PostCard';
import PostCardPlaceholder from './PostCardPlaceholder';

export default function PostsLatest({ limit }) {
  const { loading, posts } = usePosts({ limit });

  // console.log(posts);

  // if (loading) {
  //   return 'cargando';
  // }

  if (posts?.length == 0) {
    return '';
  }

  return (
    <section className="posts">
      <div className="container">
        <h3>novedades</h3>
        <div className="row">
          {loading ? (
            <>
              <PostCardPlaceholder />
              <PostCardPlaceholder />
              <PostCardPlaceholder />
              <PostCardPlaceholder />
            </>
          ) : (
            <>
              {posts?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </>
          )}
        </div>
        <div className="text-center">
          <Link href="/novedades">
            <a className="btn btn-sm btn-primary text-white">ver más noticias</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
