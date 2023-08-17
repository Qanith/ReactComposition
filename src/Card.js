const Card = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
            <hr />
        </div>
    );
};

export default Card;
