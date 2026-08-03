interface Props {
    id: string;
}

export default function Youtube({
    id
}: Props) {

    return (
        <div className="my-12 overflow-hidden rounded-3xl shadow-xl">
            <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
            />
        </div>
    )

}