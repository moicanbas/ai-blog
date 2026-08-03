interface Props {

    children: React.ReactNode;

}

export default function Badge({

    children

}: Props){

    return(

        <span
            className="
            rounded-full
            bg-violet-100
            px-3
            py-1
            text-sm
            text-violet-700
            dark:bg-violet-900/30
        "
        >

            {children}

        </span>

    )

}