import { usePosts } from 'hooks/usePosts';
import PostCard from './PostCard';
import PostCardPlaceholder from './PostCardPlaceholder';
import Spinner from './Spinner';

export default function Posts({ limit }) {
  const { loading, posts, loadingNextPage, setPage } = usePosts({ limit });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // if (posts?.length == 0) {
  //   return '';
  // }

  return (
    <section className="posts">
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
        {loadingNextPage ? (
          <Spinner />
        ) : (
          <button onClick={handleNextPage} className="btn btn-sm btn-primary text-white">
            Cargar mas noticias
          </button>
        )}
      </div>
    </section>
  );
}
