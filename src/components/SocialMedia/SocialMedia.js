import './SocialMedia.css'

const SocialMedia = () => {

    const SocialMedia = [
        { id: 1, name: "Instagram", url: "https://www.instagram.com/nathanssmota/" },
        { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/nathansmota/" },
        { id: 3, name: "GitHub", url: "https://github.com/nathanmota-dev" },
        { id: 4, name: "Twitter", url: "https://twitter.com/pq_nathan" },
        { id: 5, name: "Portfólio", url: "#" }
    ]

    const LinksMedia = SocialMedia.map((props) =>
        <div key={props.id} className="contentLinks">
            <a href={props.url}>{props.name}</a>
        </div>
    )

    return (
        <>
            {LinksMedia}
        </>
    )
}

export default SocialMedia;