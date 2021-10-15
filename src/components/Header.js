const Header = ({ img, title, message, link: { url, text } }) => {
    return (
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={img} alt="..." /></div>
            <div className="col-lg-5">
                <h1 className="font-weight-light">{title}</h1>
                <p>{message}</p>
                <a className="btn btn-primary" href={url}>{text}</a>
            </div>
        </div>
    )
}

export default Header;