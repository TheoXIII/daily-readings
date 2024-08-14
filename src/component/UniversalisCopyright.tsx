interface IProps {
    notice: string
}

export default function UniversalisCopyright(props: IProps) {
    return (
        <p dangerouslySetInnerHTML={{__html: props.notice}}></p>
    )
}