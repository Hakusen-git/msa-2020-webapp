import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './WeatherCard.css';

interface IWeatherCardProps{
    IconUrl: string | undefined;
    Main: string | undefined;
    Description: string | undefined;
    City: string | null;
    Temp: string | undefined;
}

function WeatherCard(props: IWeatherCardProps){
    
    let temp = (Number(props.Temp) - 273.15).toFixed(1)

    return (
        <div>
            <Card className="WeatherCardContainer">
                <CardActionArea>
                    <CardMedia
                        className="WeatherCardIcon"
                        image={props.IconUrl}
                    />
                    <CardContent>
                        <Typography variant="h4" color="primary" component="p" className="WeatherCardDescription">
                            {props.City}
                        </Typography>
                        <Typography variant="h4" color="primary" component="p" className="WeatherCardDescription">
                            {props.Main}
                        </Typography>
                        <Typography variant="h4" color="primary" component="p" className="WeatherCardDescription">
                            {temp + 'º'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="WeatherCardDescription">
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default WeatherCard