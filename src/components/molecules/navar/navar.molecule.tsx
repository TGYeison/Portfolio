interface propsNavarLink {
    text:string;
    link:string;
}

interface propsNavar {
    items: propsNavarLink[];
}

const Navar = (props:propsNavar) => (
    <ul className="navar__content">
        {props.items.map((item, index) => (
            <li key={index} className="navar__link">
                <a href={item.link} className="navar__link-hyper">
                    <span className="navar__link-text">
                        {item.text}
                    </span>
                </a>
            </li>
        ))}
    </ul>
);

export default Navar;