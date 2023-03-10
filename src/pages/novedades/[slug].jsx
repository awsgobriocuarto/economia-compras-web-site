/* eslint-disable */
import { useRouter } from 'next/router';
import useSinglePost from 'hooks/useSinglePost';
import PostGallery from '@components/PostGallery';
import moment from 'moment';

function Novedad() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, isError, post } = useSinglePost({ id });

  return (
    <section className="posts detail">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 col-xxl-8">
            {loading ? (
              'cargando'
            ) : (
              <>
                {!isError ? (
                  <>
                    {post?.media?.gallery?.length ? <PostGallery images={post?.media} /> : <img className="cover" src={post?.media.main_picture.large} alt="" />}
                    <h2>{post?.title}</h2>
                    {moment(post?.publication_date).format('DD/MM/YYYY')}
                    <p className="lead">{post?.excerpt}</p>
                    <div dangerouslySetInnerHTML={{ __html: post?.body }}></div>
                  </>
                ) : (
                  'error'
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Novedad;
