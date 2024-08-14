import {Component} from 'react'
import jsonp from 'jsonp';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";

import {DayInfo, Reading, Prayer} from '../type/universalis';
import getRegion from '../service/getRegion';
import GospelCard from './GospelCard';
import ReadingCard from './ReadingCard';
import { Container } from '../style/styles'

import API_URL from '../service/apiUrl';
import DailyReflection from './DailyReflection';
import UniversalisCopyright from './UniversalisCopyright';
import PsalmCard from './PsalmCard';

import "swiper/css";

interface IProps {    
}

interface IState {
    copyright: string,
    dayInfo: DayInfo | null,
    reading1: Reading | null,
    reading2: Reading | null,
    psalm: Prayer | null,
    gospelAcclamation: Prayer | null,
    gospel: Reading | null,
    date: string,
    regionName: string,
    regionCode: string
}

export default class Page extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            copyright: "",
            dayInfo: null,
            reading1: null,
            psalm: null,
            reading2: null,
            gospelAcclamation: null,
            gospel: null,
            date: "",
            regionName: "General Calendar",
            regionCode: "general"
        };

        this.componentDidMount = this.componentDidMount.bind(this)
        this.getReadings = this.getReadings.bind(this)
        this.parseUniversalisResponse = this.parseUniversalisResponse.bind(this)
        this.locationCallback = this.locationCallback.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getLocation, (() => {}));
        } else {
            console.log("Geolocation not supported");
        }

        const dateObj = new Date();
        const date = `${dateObj.getFullYear()}${String(dateObj.getMonth()+1).padStart(2, '0')}${String(dateObj.getDate()).padStart(2, '0')}`
        this.setState({date: date})
        this.getReadings(date);
    

    }

    locationCallback(response: any) {
        const region = getRegion(response.data.address);
        this.setState({regionName: region.name, regionCode: region.code})
        this.getReadings(this.state.date, region.code)
    }

    getLocation(position: any) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;        
        axios.post(`${API_URL}/reverse-geocode`, {
            latitude: latitude,
            longitude: longitude
        }).then(this.locationCallback);

    }

    parseUniversalisResponse(err: any, data: any) {
        if (err) {
            return
        }
        if (data.Mass_R2)
            this.setState({reading2: data.Mass_R2})
        this.setState({reading1: data.Mass_R1, psalm: data.Mass_Ps, gospelAcclamation: data.Mass_GA, gospel: data.Mass_G, copyright: data.copyright.text})
    }

    getReadings(date: string, regionCode: string = "general") {
        const url = `https://universalis.com/${regionCode}/${date}/jsonpmass.js`

        jsonp(url, {
            name: "universalisCallback"
        }, this.parseUniversalisResponse)
    }

    render() {
        return(
            <>
                <h1>Calendar: {this.state.regionName}</h1>
                <Swiper spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                    <Container color="red">
                        <ReadingCard name="First Reading" reading={this.state.reading1}/>
                    </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container color="yellow">
                        <PsalmCard name="Responsorial Psalm" reading={this.state.psalm}/>
                    </Container>
                    </SwiperSlide>
                    {this.state.reading2 &&
                    <SwiperSlide>
                    <Container color="blue">
                        <ReadingCard name="Second Reading" reading={this.state.reading2}/>
                    </Container>
                    </SwiperSlide>
                    }
                    <SwiperSlide>
                    <Container color="purple">
                        <GospelCard name="Gospel" reading={this.state.gospel} acclamation={this.state.gospelAcclamation}/>
                    </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Container color="pink">
                        <DailyReflection/>
                    </Container>
                    </SwiperSlide>
                </Swiper>
                <UniversalisCopyright notice={this.state.copyright}/>
            </>
        )
    }
}

//                 
