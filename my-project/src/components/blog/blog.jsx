import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
    const { Title, Cover, Author, Author_img, Posted, Reading_Time, Hashtags} = blog
    return (
        <div>
            <img className='w-2/4' src={Cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-1/4' src={Author_img} alt="" />
                    <div>
                        <h1 className='text-2xl font-medium'>{Author}</h1>
                        <p>{Posted}</p>
                    </div>
                </div>
                <div>
                    <h4>{Reading_Time} min read</h4>
                </div>
            </div>
            <h2 className='text-4xl font-semibold'>{Title}</h2>
            <p>
                {
                    Hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;