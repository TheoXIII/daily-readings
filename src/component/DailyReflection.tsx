import {Component} from 'react';
import axios from "axios";

import API_URL from '../service/apiUrl';
import {sanitize} from 'dompurify';

interface RSSItem {
    creator: string,
    title: string,
    link: string,
    pubDate: string,
    "content:encoded": string,
    "content:encodedSnippet": string,
    "dc:creator": string,
    content: string,
    contentSnippet: string,
    guid: string,
    categories: string[],
    isoDate: string
}

interface IProps {    
}

interface IState {
    content: string | null,
    audio: string | null;
    link : string | null,
}


export default class DailyReflection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            content: null,
            audio: null,
            link: null,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getRSS = this.getRSS.bind(this);
    }

    componentDidMount() {
        this.getRSS();
    }

    getRSS() {
        const date = (new Date()).getDate(); //Get current day of month to send to server.
        axios.get(`${API_URL}/feed?date=${date}`).then((response) => this.setState(response.data));
    }


    render() {
        return (
            <div className="text">
                <h1>Daily Reflection</h1>
                {this.state.content && <div dangerouslySetInnerHTML={{__html: sanitize(this.state.content)}}></div>}
                {this.state.audio && <div dangerouslySetInnerHTML={{__html: this.state.audio}}></div>}
                {this.state.link && <a href={this.state.link}>© 2024 My Catholic Life! Inc.</a>}
            </div>
        )
    }
}