import {Component} from 'react';
import axios from "axios";

import API_URL from '../service/apiUrl';
import AudioPlayer from './AudioPlayer';

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
    link : string | null,
}


export default class DailyReflection extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            content: null,
            link: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.RSSCallback = this.RSSCallback.bind(this);
        this.getRSS = this.getRSS.bind(this);
    }

    componentDidMount() {
        this.getRSS();
    }

    RSSCallback(items: RSSItem[]) {
        const date = new Date();
        const filteredItems = items.filter((elem) => elem.contentSnippet.includes(`${date.getDate()},`));
        if (filteredItems.length > 0) {
            const lines = filteredItems[0]["content:encoded"].split("\n");
            let start;
            let end;
            for (const [i, line] of lines.entries()) {
                if (!start && line.includes("https://widget.spreaker.com/player"))
                    start = i+1;
                else if (start && !end && i != start && line.includes("<p style=\"text-align: center;\">"))
                    end = i;
            }
            const content = lines.slice(start, end).join("\n");
            this.setState({content: content, link: filteredItems[0].link});
        }
    }

    getRSS() {
        axios.get(`${API_URL}/feed`).then((response) => this.RSSCallback(response.data));
    }


    render() {
        return (
            <div className="text">
                <h1>Daily Reflection</h1>
                {this.state.content && <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>}
                {this.state.content && <AudioPlayer text={this.state.content}/>}<br/>
                {this.state.link && <a href={this.state.link}>© 2024 My Catholic Life! Inc.</a>}
            </div>
        )
    }
}