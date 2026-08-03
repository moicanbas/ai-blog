interface Props {

    children: React.ReactNode;

}

export default function Callout({

    children

}: Props) {

    return (

        <div
            className="
my-8
rounded-2xl
border-l-4
border-violet-500
bg-violet-50
p-6
dark:bg-violet-950/30
"
        >

            💡 {children}

        </div>

    )

}