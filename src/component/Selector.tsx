import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface IProps {
    setFunction: Function,
    items: {name: string, code: string}[],
    show: boolean,
    onHide: Function,
    title: string
}

export default function Selector(props: IProps) {
    const elems = [];
    for (let i=0; i < props.items.length; i++) {
        elems.push(<div className="item-button"><Button key={i} onClick={() => props.setFunction(props.items[i])}>{props.items[i].name}</Button></div>)
    }
    return (
        <div
            className="modal show"
            style={{display: "block", position: "initial"}}
        >
            <Modal show={props.show} onHide={() => props.onHide()}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {elems}
                </Modal.Body>
            </Modal>
        </div>
    )
}