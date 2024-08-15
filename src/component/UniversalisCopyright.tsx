interface IProps {
    notice: string
}

export default function UniversalisCopyright(props: IProps) {
    return (
        <div className="copyright-notice">
            <p dangerouslySetInnerHTML={{__html: props.notice}}></p>
        </div>
    )
}