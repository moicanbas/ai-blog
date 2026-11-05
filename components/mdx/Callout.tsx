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
rounded-md
border-l-4
border-primary
bg-primary/10
p-6
"
        >

            💡 {children}

        </div>

    )

}