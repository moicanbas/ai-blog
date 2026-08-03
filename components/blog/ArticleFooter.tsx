import Button from "../ui/Button";

export default function ArticleFooter() {

    return (

        <footer
            className="mt-24 rounded-[40px] border p-10 text-center">
            <h2 className="text-3xl font-bold">
                ¿Te gustó este artículo?
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Muy pronto habrá más contenido sobre IA,
                Python y automatización.
            </p>
            <div className="mt-8">
                <Button href="/blog">
                    Seguir leyendo
                </Button>
            </div>
        </footer>

    )

}
