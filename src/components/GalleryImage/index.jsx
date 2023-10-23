export default function GalleryImage({show}) {
    return <div className="gallery-image">
        <img src={show.image.medium} alt="gallery image" />
    </div>
}