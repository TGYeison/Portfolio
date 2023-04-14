interface propsProfile {
    link?:string;
    title?: string;
    image?: string;
    description?: string;
}

const Profile = (props:propsProfile) => (
    <>
        <a href={props.link} className="profile__hyperlink">
            <img src={props.image} alt="" className="logo__image" />
        </a>
        <h1 className="profile__title">{props.title}</h1>
        <span className="profile__description">{props.description}</span>
    </>
);

export default Profile;




                    